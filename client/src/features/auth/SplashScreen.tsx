import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
      <Pressable style={styles.button} onPress={() => router.push("/basic")}>
        <Text style={styles.buttonText}>Go to Basic Screen</Text>
      </Pressable>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
