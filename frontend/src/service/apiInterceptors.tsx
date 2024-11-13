import axios from "axios";
import { BASE_URL } from "./config";
import { tokenStorage } from "@state/storage";
import { refresh_tokens } from "./authService";
import { Alert } from "react-native";

export const appAxios = axios.create({
  baseURL: BASE_URL,
});

appAxios.interceptors.request.use(async (config) => {
  const accessToken = await tokenStorage.getItem("accesToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

appAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = refresh_tokens();
        if (newAccessToken) {
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
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
