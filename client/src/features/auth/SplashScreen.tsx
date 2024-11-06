import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Colors } from "@utils/Constants";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
