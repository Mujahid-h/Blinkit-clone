import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";

const Header: FC<{ showNotice: () => void }> = ({ showNotice }) => {
  return (
    <View style={styles.subContainer}>
      <TouchableOpacity activeOpacity={0.6}>
        <CustomText variant="h8" fontFamily={Fonts.Bold} style={styles.text}>
          Delivery in
        </CustomText>
        <View style={styles.flexRowGap}>
          <CustomText
            variant="h2"
            fontFamily={Fonts.SemiBold}
            fontSize={RFValue(5)}
            style={{ color: "#3B4886" }}
          >
            10 minutes
          </CustomText>
          <TouchableOpacity style={styles.noticeBtn} onPress={showNotice}>
            ⛈ Rain
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? 10 : 5,
    justifyContent: "space-between",
  },
  flexRowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  noticeBtn: {
    backgroundColor: "#E8EAF5",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    bottom: -2,
  },
});
