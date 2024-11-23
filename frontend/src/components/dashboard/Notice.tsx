import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { NoticeHeight } from "@utils/Scaling";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import CustomText from "@components/ui/CustomText";

const Notice: FC = () => {
  return (
    <View style={{ height: NoticeHeight }}>
      <View style={styles.container}>
        <View style={styles.noticeContainer}>
          <CustomSafeAreaView style={{ padding: 10 }}>
            <CustomText>It's raining in your location</CustomText>
            <CustomText>
              Our delvivery partner may take longer to reach you
            </CustomText>
          </CustomSafeAreaView>
        </View>
      </View>
    </View>
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
  },
});
