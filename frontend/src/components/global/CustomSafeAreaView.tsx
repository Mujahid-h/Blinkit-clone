import {
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  View,
  Platform,
} from "react-native";
import React, { FC, ReactNode } from "react";
import Constants from "expo-constants";

interface CustomSafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.container, styles.androidSafeArea]}>{children}</View>
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
