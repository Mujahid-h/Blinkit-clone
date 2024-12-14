import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Colors, Fonts } from "@utils/Constants";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { goBack } from "@utils/NavigationUtils";
import CustomText from "./CustomText";

const CustomHeader: FC<{ title: string; search?: boolean }> = ({
  title,
  search,
}) => {
  return (
    <CustomSafeAreaView>
      <View style={styles.flexRow}>
        <Pressable onPress={() => goBack()}>
          <Ionicons
            name="chevron-back"
            color={Colors.text}
            size={RFValue(16)}
          />
        </Pressable>
        <CustomText
          variant="h5"
          fontFamily={Fonts.SemiBold}
          style={styles.text}
        >
          {title}
        </CustomText>
        <View>
          {search && (
            <Ionicons name="search" color={Colors.text} size={RFValue(16)} />
          )}
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  flexRow: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: 60,
    backgroundColor: "#fff",
    borderBottomWidth: 0.6,
    borderBottomColor: Colors.border,
    // zIndex: 999,
  },
  text: {
    textAlign: "center",
  },
});
