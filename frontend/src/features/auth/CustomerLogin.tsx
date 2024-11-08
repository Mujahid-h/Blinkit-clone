import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomerLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#000000" }}>CustomerLogin</Text>
    </View>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
