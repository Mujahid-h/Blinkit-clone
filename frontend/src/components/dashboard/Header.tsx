import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import { useAuthStore } from "@state/authStore";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Header: FC<{ showNotice: () => void }> = ({ showNotice }) => {
  const { user, setUser } = useAuthStore();

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
            style={styles.text}
          >
            10 minutes
          </CustomText>
          <TouchableOpacity style={styles.noticeBtn} onPress={showNotice}>
            <CustomText
              fontSize={RFValue(7)}
              style={{ color: "#3B4886" }}
              fontFamily={Fonts.SemiBold}
            >
              ⛈ Rain
            </CustomText>
          </TouchableOpacity>
        </View>

        <View style={styles.flexRow}>
          <CustomText
            variant="h8"
            numberOfLines={1}
            fontFamily={Fonts.Medium}
            style={styles.text2}
          >
            {user?.address || "Somewhere on Earth"}
          </CustomText>
          <MaterialCommunityIcons
            name="menu-down"
            size={RFValue(20)}
            color={"#fff"}
            style={{ bottom: -1 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="account-circle-outline"
          color={"#fff"}
          size={RFValue(36)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  flexRow: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text2: {
    color: "#fff",
    width: "90%",
    textAlign: "center",
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
