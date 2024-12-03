import { Image, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import ScalePress from "@components/ui/ScalePress";
import { navigate } from "@utils/NavigationUtils";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";

const ContentContainer: FC<{ data: any }> = ({ data }) => {
  const renderItems = (items: any[]) => {
    return (
      <>
        {items.map((item, index) => (
          <ScalePress
            onPress={() => navigate("ProductCategories")}
            key={index}
            style={styles.items}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <CustomText
                variant="h8"
                fontFamily={Fonts.Medium}
                style={styles.text}
                numberOfLines={2}
              >
                {item.name}
              </CustomText>
            </View>
          </ScalePress>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>{renderItems(data?.slice(0, 4))}</View>
      <View style={styles.flex}>{renderItems(data?.slice(4))}</View>
    </View>
  );
};

export default ContentContainer;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  items: {
    width: "22%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 6,
    backgroundColor: "#E5F3F3",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    flexShrink: 1,
  },
});
