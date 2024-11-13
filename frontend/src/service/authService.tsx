import axios from "axios";
import { BASE_URL } from "./config";
import { tokenStorage } from "@state/storage";
import { useAuthStore } from "@state/authStore";

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
