import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

const AdCarousal: FC<{ adData: any }> = ({ adData }) => {
  return (
    <View style={{ left: -10, marginVertical: 20 }}>
      <Text>AdCarousal</Text>
    </View>
  );
};

export default AdCarousal;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
