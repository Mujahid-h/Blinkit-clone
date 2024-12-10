import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductCategories = () => {
  return (
    <View style={styles.container}>
      <Text>ProductCategories</Text>
    </View>
  );
};

export default ProductCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
