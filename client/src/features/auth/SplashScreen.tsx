import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Colors } from "@utils/Constants";
import Logo from "@assets/images/splash_logo.jpeg";
import { screenHeight, screenWidth } from "@utils/Scaling";

const SplashScreen = () => {
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
