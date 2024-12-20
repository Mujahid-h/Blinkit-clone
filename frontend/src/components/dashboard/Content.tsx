import { StyleSheet, View } from "react-native";
import React from "react";
import { adData, categories } from "@utils/dummyData";
import AdCarousal from "@features/dashboard/AdCarousal";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";
import ContentContainer from "./ContentContainer";

const Content = () => {
  return (
    <View style={styles.container}>
      <AdCarousal adData={adData} />
      <CustomText variant="h5" fontFamily={Fonts.Bold}>
        Grocery & Kitchen
      </CustomText>
      <ContentContainer data={categories} />
      <CustomText variant="h5" fontFamily={Fonts.Bold}>
        BestSellers
      </CustomText>
      <ContentContainer data={categories} />
      <CustomText variant="h5" fontFamily={Fonts.Bold}>
        Snacks & Drinks
      </CustomText>
      <ContentContainer data={categories} />
      <CustomText variant="h5" fontFamily={Fonts.Bold}>
        Home &b Lifestyles
      </CustomText>
      <ContentContainer data={categories} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
