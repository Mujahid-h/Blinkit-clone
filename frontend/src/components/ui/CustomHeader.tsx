import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@utils/Constants";

const CustomHeader = () => {
  return (
    <View>
      <Text>CustomHeader</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: 60,
    backgroundColor: "#fff",
    borderBottomWidth: 0.6,
    borderBottomColor: Colors.border,
  },
});
