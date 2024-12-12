import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC, useRef } from "react";

interface SidebarProps {
  selectedCategory: any;
  categories: any;
  onCategoryPress: (category: any) => void;
}

const Sidebar: FC<SidebarProps> = ({
  selectedCategory,
  categories,
  onCategoryPress,
}) => {
  const scrolViewRef = useRef<ScrollView>(null);
  return (
    <View style={styles.sideBar}>
      <ScrollView
        ref={scrolViewRef}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  sideBar: {
    width: "24%",
    backgroundColor: "#fff",
    borderRightColor: "#eee",
    borderRightWidth: 0.8,
    position: "relative",
  },
});
