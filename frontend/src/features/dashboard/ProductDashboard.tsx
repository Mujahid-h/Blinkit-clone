import { Text, Animated as RNAnimated, View } from "react-native";
import React, { useEffect, useRef } from "react";
import NoticeAnimation from "./NoticeAnimation";
import { NoticeHeight } from "@utils/Scaling";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import Visuals from "./Visuals";

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
          <View>
            <Text>ProductDashboard</Text>
          </View>
        </CustomSafeAreaView>
      </>
    </NoticeAnimation>
  );
};

export default ProductDashboard;
