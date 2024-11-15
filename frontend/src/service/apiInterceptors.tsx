import axios from "axios";
import { BASE_URL } from "./config";
import { tokenStorage } from "@state/storage";
import { Alert } from "react-native";

export const appAxios = axios.create({
  baseURL: BASE_URL,
});

appAxios.interceptors.request.use(async (config) => {
  const accessToken = await tokenStorage.getItem("accesToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

appAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // Since it was creting loop as authService iport ing from interceptors and vice verca it is collapsing so creating refresh_tokens inside anticeptors
        const refresh_tokens = async () => {
          const refreshToken = await tokenStorage.getItem("refreshToken");
          if (!refreshToken) {
            throw new Error("No refresh token available");
          }

          const response = await axios.post(`${BASE_URL}/refresh-token`, {
            refreshToken,
          });

          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;

          // Store the new tokens
          await tokenStorage.setItem("accessToken", newAccessToken);
          await tokenStorage.setItem("refreshToken", newRefreshToken);

          return newAccessToken;
        };
        // Till here the refresh_tokens functions violating KIS principle alternative is creating seprate util file for refrehstokens and import from utils would solve the problem

        const newAccessToken = await refresh_tokens();
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return appAxios(error.config);
        }
      } catch (error) {
        console.log("ERROR REFRESHING TOKEN");
      }
    }

    if (error.response && error.response.status != 401) {
      const errorMessage =
        error.response.data.message || "Something went wrong";
      Alert.alert(errorMessage);
    }

    Promise.resolve(error);
  }
);
