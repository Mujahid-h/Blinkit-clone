import axios from "axios";
import { BASE_URL } from "./config";
import { tokenStorage } from "@state/storage";
import { useAuthStore } from "@state/authStore";
import { resetAndNavigate } from "@utils/NavigationUtils";
import { appAxios } from "./apiInterceptors";

export const customerLogin = async (phone: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/customer/login`, { phone });
    // console.log("From auth service", response);
    const { accessToken, refreshToken, customer } = response.data;

    await tokenStorage.setItem("accessToken", accessToken);
    await tokenStorage.setItem("refreshToken", refreshToken);

    const { setUser } = useAuthStore.getState();
    setUser(customer);
    // return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Login failed. Please try again." };
  }
};

export const refetchUser = async (setUser: any) => {
  try {
    const response = await appAxios.get(`/user`);
    setUser(response.data.user);
  } catch (error) {
    console.error("Error refetching User:", error);
  }
};

export const refresh_tokens = async () => {
  try {
    const refreshToken = await tokenStorage.getItem("refreshToken");
    const response = await axios.post(`${BASE_URL}/refresh-token`, {
      refreshToken,
    });

    const new_access_token = response.data.accessToken;
    const new_refresh_token = response.data.refreshToken;

    await tokenStorage.setItem("accessToken", new_access_token);
    await tokenStorage.setItem("refreshToken", new_refresh_token);

    return new_access_token;
  } catch (error) {
    console.error("ERROR REFRESHING TOKEN", error);
    await tokenStorage.clearAll();
    resetAndNavigate("CustomerLogin");
  }
};

export const delivery_login = async (email: any, password: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/delivery/login`, {
      email,
      password,
    });
    // console.log("From auth service", response);
    const { accessToken, refreshToken, deliveryPartner } = response.data;

    await tokenStorage.setItem("accessToken", accessToken);
    await tokenStorage.setItem("refreshToken", refreshToken);

    const { setUser } = useAuthStore.getState();
    setUser(deliveryPartner);
    // return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Login failed. Please try again." };
  }
};
