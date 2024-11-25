import { Text, Animated as RNAnimated, View, StyleSheet } from "react-native";
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
