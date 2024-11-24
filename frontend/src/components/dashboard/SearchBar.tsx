import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors, Fonts } from "@utils/Constants";
import RollingBar from "react-native-rolling-bar";
import CustomText from "@components/ui/CustomText";

const SearchBar: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="search" size={RFValue(20)} color={Colors.text} />
      <RollingBar
        interval={3000}
        defaultStyle={false}
        customStyle={styles.textContainer}
      >
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "sweets"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "chips"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search Aata, Daal, Rice
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "milk"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          Search "snacks"
        </CustomText>
      </RollingBar>
      <View style={styles.divider} />
      <Ionicons name="mic" size={RFValue(20)} color={Colors.text} />
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.6,
    borderBlockColor: Colors.border,
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
  },
  textContainer: {
    width: "90%",
    height: 50,
    paddingLeft: 10,
  },
});
