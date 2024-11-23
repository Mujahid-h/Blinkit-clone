import { StyleSheet, View } from "react-native";
import React, { FC } from "react";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";
import { NoticeHeight } from "@utils/Scaling";

const Notice: FC = () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <View style={[styles.container, { height: NoticeHeight }]}>
        <View style={styles.noticeContainer}>
          <CustomText
            style={styles.heading}
            variant="h8"
            fontFamily={Fonts.SemiBold}
          >
            It's raining in your location
          </CustomText>
          <CustomText
            style={styles.textCenter}
            variant="h9"
            fontFamily={Fonts.Regular}
          >
            Our delivery partners may take longer to reach you
          </CustomText>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CCD5E4",
  },
  noticeContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCD5E4",
    padding: 10, // Ensure content is not cut off
  },
  heading: {
    textAlign: "center",
    marginBottom: 8,
  },
  textCenter: {
    textAlign: "center",
    color: "#2D3875",
  },
});
