import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

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
  return (
    <View style={styles.sideBar}>
      <Text>Sidebar</Text>
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
