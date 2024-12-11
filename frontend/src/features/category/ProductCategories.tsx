import { StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";

const ProductCategories: FC = () => {
  const [category, setCategory] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [categoryLoading, setCategoryLoading] = useState<boolean>(true);
  const [products, setProduct] = useState<any[]>([]);
  const [productLoading, setProductLoading] = useState<boolean>(false);

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
