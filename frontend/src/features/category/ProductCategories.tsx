import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import CustomHeader from "@components/ui/CustomHeader";
import Sidebar from "./Sidebar";
import { getAllCategories } from "@service/productService";

const ProductCategories: FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [categoryLoading, setCategoryLoading] = useState<boolean>(false);
  const [products, setProduct] = useState<any[]>([]);
  const [productLoading, setProductLoading] = useState<boolean>(false);

  const fetchCategories = async () => {
    try {
      setCategoryLoading(true);
      const data = await getAllCategories();
      setCategories(data);
      if (data && data.length > 0) {
        setSelectedCategory(data[2]);
      }
    } catch (error) {
      console.log("Error while fetching categories", error);
    } finally {
      setCategoryLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader title={selectedCategory?.name || "categories"} search />

      <View style={styles.subContainer}>
        {categoryLoading ? (
          <ActivityIndicator size={"small"} />
        ) : (
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryPress={(category: any) => setSelectedCategory(category)}
          />
        )}
      </View>
    </View>
  );
};

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

export default ProductCategories;
