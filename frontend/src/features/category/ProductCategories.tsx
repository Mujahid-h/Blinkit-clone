import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

const ProductCategories: FC = () => {
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
