import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { adData } from "@utils/dummyData";
import AdCarousal from "@features/dashboard/AdCarousal";

const Content = () => {
  return (
    <View style={styles.container}>
      <AdCarousal adData={adData} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});