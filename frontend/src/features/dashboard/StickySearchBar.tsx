import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Colors } from "@utils/Constants";
import {
  StickyView,
  useCollapsibleContext,
} from "@r0b0t3d/react-native-collapsible";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import SearchBar from "@components/dashboard/SearchBar";

const StickySearchBar: FC = () => {
  const { scrollY } = useCollapsibleContext();

  const animatedShadow = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 140], [0, 1]);
    return { opacity };
  });

  const backgroundColorChnages = useAnimatedStyle(() => {
    const backgroundColor = interpolate(scrollY.value, [1, 80], [0, 1]);
    return { backgroundColor: `rgba(255, 255, 255, ${backgroundColor})` };
  });

  return (
    <StickyView style={backgroundColorChnages}>
      <SearchBar />
      <Animated.View style={[styles.shadow, animatedShadow]} />
    </StickyView>
  );
};

export default StickySearchBar;

const styles = StyleSheet.create({
  shadow: {
    width: "100%",
    height: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
});