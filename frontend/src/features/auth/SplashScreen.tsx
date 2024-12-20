import React, { FC, useEffect } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { Colors } from "@utils/Constants";
import Logo from "@assets/images/splash_logo.jpeg";
import { screenHeight, screenWidth } from "@utils/Scaling";
import * as Location from "expo-location";
import { useAuthStore } from "@state/authStore";
import { tokenStorage } from "@state/storage";
import { resetAndNavigate } from "@utils/NavigationUtils";
import { jwtDecode } from "jwt-decode";
import { refetchUser, refresh_tokens } from "@service/authService";

const SplashScreen: FC = () => {
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Location Permission Denied",
            "We need location permission to improve your experience."
          );
          return;
        }

        await Location.requestBackgroundPermissionsAsync();
        const location = await Location.getCurrentPositionAsync({});
        // console.log("User Location:", location);
      } catch (error) {
        Alert.alert("Error", "Could not fetch location. Please try again.");
      }
    };

    fetchUserLocation();

    tokenCheck();
  }, []);

  interface DecodedToken {
    exp: number;
  }

  const tokenCheck = async () => {
    const accessToken = await tokenStorage.getItem("accessToken");
    const refreshToken = await tokenStorage.getItem("refreshToken");

    if (accessToken) {
      const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
      const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken);

      const currentTime = Date.now() / 1000;

      if (decodedRefreshToken?.exp < currentTime) {
        // console.log("Refresh Token Expired")
        resetAndNavigate("CustomerLogin");
        Alert.alert("Session Expired", "Please login again");
        return false;
      }

      if (decodedAccessToken?.exp < currentTime) {
        try {
          await refresh_tokens();
          await refetchUser(setUser);
        } catch (error) {
          console.log(error);
          Alert.alert("There was an error refreshing token");
          return false;
        }
      }

      if (user?.role === "Customer") {
        resetAndNavigate("ProductDashboard");
      } else {
        resetAndNavigate("DeliveryDashboard");
      }

      return true;
      // resetAndNavigate("CustomerLogin");
    } else {
      resetAndNavigate("CustomerLogin");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logo: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.7,
    resizeMode: "contain",
  },
});
