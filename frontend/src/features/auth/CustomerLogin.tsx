import { Animated, Image, StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import ProductSlider from "@components/login/ProductSlider";
import { resetAndNavigate } from "@utils/NavigationUtils";

const CustomerLogin: FC = () => {
  const [gestureSequence, setGestureSequence] = useState<string[]>([]);

  const gestureHandler = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      const { translationX, translationY } = nativeEvent;
      let direction = "";
      if (Math.abs(translationX) > Math.abs(translationY)) {
        direction = translationX >= 0 ? "right" : "left";
      } else {
        direction = translationY >= 0 ? "down" : "up";
      }

      // console.log(translationX, translationY, direction);
      const newSequence = [...gestureSequence, direction].slice(-5);
      setGestureSequence(newSequence);
      // console.log(newSequence);
      if (newSequence.join(" ") === "up up down left right") {
        setGestureSequence([]);
        resetAndNavigate("DeliveryLogin");
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeAreaView>
          <ProductSlider />
          <PanGestureHandler onHandlerStateChange={gestureHandler}>
            <Animated.ScrollView
              bounces={false}
              keyboardDismissMode={"on-drag"}
              keyboardShouldPersistTaps={"handled"}
              contentContainerStyle={styles.subContainer}
            >
              <View style={styles.content}>
                <Image
                  source={require("@assets/images/logo.png")}
                  style={styles.logo}
                />
              </View>
            </Animated.ScrollView>
          </PanGestureHandler>
        </CustomSafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 50,
    backgroundColor: "white",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
  },
});
