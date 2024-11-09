import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CustomerLogin: FC = () => {
  return (
    <GestureHandlerRootView>
      <Text> Helloo mF</Text>
    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
