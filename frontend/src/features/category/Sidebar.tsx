import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useRef } from "react";
import Animated, { useSharedValue } from "react-native-reanimated";
import CustomText from "@components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@utils/Constants";

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

  const indicatorPosition = useSharedValue(0);
  const animatedValues = categories?.map(() => useSharedValue(0));
  return (
    <View style={styles.sideBar}>
      <ScrollView
        ref={scrolViewRef}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View>
          {categories?.map((category: any, index: number) => (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              onPress={() => onCategoryPress(category)}
              style={styles.categoryButton}
            >
              <View style={styles.imageContainer}>
                <Animated.Image
                  source={{ uri: category.image }}
                  style={styles.image}
                />
              </View>
              <CustomText fontSize={RFValue(7)} style={{ textAlign: "center" }}>
                {category?.name}
              </CustomText>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </ScrollView>
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
  categoryButton: {
    padding: 10,
    paddingVertical: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    borderRadius: 100,
    height: "50%",
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F3F4F7",
    overflow: "hidden",
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },

  selectedImageContainer: {
    backgroundColor: "#CFFFDB",
  },
  indicator: {
    position: "absolute",
    right: 0,
    width: 4,
    height: 80,
    top: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignSelf: "center",
    backgroundColor: Colors.secondary,
  },
});
