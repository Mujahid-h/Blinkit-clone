import {
  Animated as RNAnimated,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { FC, useEffect, useRef } from "react";
import NoticeAnimation from "./NoticeAnimation";
import { NoticeHeight, screenHeight } from "@utils/Scaling";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import Visuals from "./Visuals";
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  useCollapsibleContext,
  withCollapsibleContext,
} from "@r0b0t3d/react-native-collapsible";
import AnimatedHeader from "./AnimatedHeader";
import StickySearchBar from "./StickySearchBar";
import Content from "@components/dashboard/Content";
import CustomText from "@components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { Fonts } from "@utils/Constants";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

const NOTICE_HEIGHT = -(NoticeHeight + 12);

const ProductDashboard: FC = () => {
  const { scrollY, expand } = useCollapsibleContext();
  const previousScroll = useRef<number>(0);

  const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp =
      scrollY.value < previousScroll.current && scrollY.value > 180;
    const opacity = withTiming(isScrollingUp ? 1 : 0, { duration: 300 });
    const translateY = withTiming(isScrollingUp ? 0 : 10, { duration: 300 });

    previousScroll.current = scrollY.value;

    return { opacity, transform: [{ translateY }] };
  });

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

          <Animated.View style={[styles.backToTopButton, backToTopStyle]}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              onPress={() => {
                (scrollY.value = 0), expand();
              }}
            >
              <Ionicons
                name="arrow-up-circle-outline"
                size={RFValue(12)}
                color="white"
              />
              <CustomText
                variant="h9"
                style={{ color: "#fff" }}
                fontFamily={Fonts.SemiBold}
              ></CustomText>
            </TouchableOpacity>
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
  backToTopButton: {
    position: "absolute",
    alignSelf: "center",
    top: Platform.OS === "ios" ? screenHeight * 0.18 : 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "black",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 999,
  },
});

export default withCollapsibleContext(ProductDashboard);
