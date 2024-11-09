import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";

const CustomerLogin: FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <CustomSafeAreaView>
        <Text>My custom app should take safe area must </Text>
      </CustomSafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
