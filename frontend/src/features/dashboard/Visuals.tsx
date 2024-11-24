import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { darkWeatherColors } from "@utils/Constants";
import { screenHeight, screenWidth } from "@utils/Scaling";
import LottieView from "lottie-react-native";

const Visuals: FC = () => {
  return (
    <Animated.View style={styles.container}>
      <LinearGradient colors={darkWeatherColors} style={styles.gradient} />
      <Image
        source={require("@assets/images/cloud.png")}
        style={styles.cloud}
      />
      <LottieView
        autoPlay={true}
        enableMergePathsAndroidForKitKatAndAbove={true}
        loop={true}
        source={require("@assets/animations/raining.json")}
        style={styles.lottie}
      />
    </Animated.View>
  );
};

export default Visuals;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // flex: 1
  },
  lottie: {
    width: "100%",
    height: 150,
    position: "absolute",
    transform: [{ scaleX: -1 }],
  },
  gradient: {
    width: "100%",
    height: screenHeight * 0.4,
    position: "absolute",
  },
  cloud: {
    width: screenWidth,
    resizeMode: "stretch",
    height: 100,
  },
});
