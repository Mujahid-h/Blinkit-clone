import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@utils/Constants";
import Logo from "@assets/images/splash_logo.jpeg";
import { screenHeight, screenWidth } from "@utils/Scaling";
import * as Location from "expo-location";
import { useAuthStore } from "@state/authStore";

const SplashScreen = () => {
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Request permission for foreground location access
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Location Permission Denied",
            "We need location permission to improve your experience."
          );
          return;
        }

        // Optional: Request background location permission if needed
        await Location.requestBackgroundPermissionsAsync();

        // Fetch the user's current location
        const location = await Location.getCurrentPositionAsync({});
        console.log("User Location:", location);
      } catch (error) {
        Alert.alert("Error", "Could not fetch location. Please try again.");
      }
    };

    fetchUserLocation();
  }, []);

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
