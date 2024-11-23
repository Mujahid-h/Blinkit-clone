import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";
import Constants from "expo-constants";
import { Defs, G, Path, Svg, Use } from "react-native-svg";
import { wavyData } from "@utils/dummyData";

const Notice: FC = () => {
  return (
    <View>
      <View style={[styles.container]}>
        <View style={styles.noticeContainer}>
          <SafeAreaView
            style={{
              padding: 10,
              paddingTop: Constants.statusBarHeight + 10,
            }}
          >
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
          </SafeAreaView>
        </View>
      </View>
      <Svg
        width="100%"
        height="35"
        viewBox="0 0 4000 1000"
        fill="#CCD5E4"
        preserveAspectRatio="none"
        style={styles.wave}
      >
        <Defs>
          <Path id="wavypath" d={wavyData} />
        </Defs>
        <G>
          <Use href="#wavypath" y="321" />
        </G>
      </Svg>
    </View>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCD5E4",
  },
  noticeContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCD5E4",
  },
  heading: {
    textAlign: "center",
    marginBottom: 8,
  },
  textCenter: {
    textAlign: "center",
    color: "#2D3875",
  },
  wave: {
    width: "100%",
    transform: [{ rotateX: "180deg" }],
  },
});
