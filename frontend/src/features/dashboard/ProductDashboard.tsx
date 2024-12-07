import {
  Animated as RNAnimated,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import NoticeAnimation from "./NoticeAnimation";
import { NoticeHeight } from "@utils/Scaling";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import Visuals from "./Visuals";
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  withCollapsibleContext,
} from "@r0b0t3d/react-native-collapsible";
import AnimatedHeader from "./AnimatedHeader";
import StickySearchBar from "./StickySearchBar";
import Content from "@components/dashboard/Content";
import CustomText from "@components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { Fonts } from "@utils/Constants";
import Animated from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

const NOTICE_HEIGHT = -(NoticeHeight + 12);

const ProductDashboard = () => {
  const NoticePostion = useRef(new RNAnimated.Value(NOTICE_HEIGHT)).current;

  const slideUp = () => {
    RNAnimated.timing(NoticePostion, {
      toValue: NOTICE_HEIGHT - 40,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  const slideDown = () => {
    RNAnimated.timing(NoticePostion, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideDown();
    const timeoutId = setTimeout(() => {
      slideUp();
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <NoticeAnimation NoticePostion={NoticePostion}>
      <>
        <CustomSafeAreaView>
          <Visuals />

          <Animated.View>
            <TouchableOpacity></TouchableOpacity>
          </Animated.View>
          <CollapsibleContainer style={styles.panelContainer}>
            <CollapsibleHeaderContainer containerStyle={styles.transparent}>
              <AnimatedHeader
                showNotice={() => {
                  slideDown();
                  const timeoutId = setTimeout(() => {
                    slideUp();
                  }, 3500);
                  return () => clearTimeout(timeoutId);
                }}
              />
              <StickySearchBar />
            </CollapsibleHeaderContainer>
            <CollapsibleScrollView
              nestedScrollEnabled
              style={styles.panelContainer}
              showsVerticalScrollIndicator={false}
            >
              <Content />
              <View style={{ backgroundColor: "#F8F8F8", padding: 20 }}>
                <CustomText
                  fontSize={RFValue(32)}
                  fontFamily={Fonts.Bold}
                  style={{ opacity: 0.2 }}
                >
                  Pakistan's first minute app 🥭
                </CustomText>
                <CustomText fontFamily={Fonts.Bold} style={{ opacity: 0.2 }}>
                  Developed By ♥ Mujahid Hussain
                </CustomText>
              </View>
            </CollapsibleScrollView>
          </CollapsibleContainer>
        </CustomSafeAreaView>
      </>
    </NoticeAnimation>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
  },
  transparent: {
    backgroundColor: "transparent",
  },
});

export default withCollapsibleContext(ProductDashboard);
