import {
  Alert,
  Animated,
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import ProductSlider from "@components/login/ProductSlider";
import { resetAndNavigate } from "@utils/NavigationUtils";
import CustomText from "@components/ui/CustomText";
import { Colors, Fonts, lightColors } from "@utils/Constants";
import CustomInput from "@components/ui/CustomInput";
import CustomButton from "@components/ui/CustomButton";
import useKeyboardOffsetHeight from "@utils/useKeyboardOffsetHeight";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { customerLogin } from "@service/authService";

const CustomerLogin: FC = () => {
  const [gestureSequence, setGestureSequence] = useState<string[]>([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomColors = [...lightColors].reverse();

  const keyboardOffsetHeight = useKeyboardOffsetHeight();

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (keyboardOffsetHeight == 0) {
      Animated.timing(animatedValue, {
        toValue: keyboardOffsetHeight * 0.84,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardOffsetHeight * 0.5,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardOffsetHeight]);

  const handleAuth = async () => {
    Keyboard.dismiss();
    setLoading(true);

    try {
      const response = await customerLogin(phoneNumber);
      // console.log("From customer login", response);

      resetAndNavigate("ProductDashboard");
    } catch (error) {
      Alert.alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

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
              style={{ transform: [{ translateY: animatedValue }] }}
            >
              <LinearGradient colors={bottomColors} style={styles.gradient} />
              <View style={styles.content}>
                <Image
                  source={require("@assets/images/logo.png")}
                  style={styles.logo}
                />
                <CustomText variant="h2" fontFamily={Fonts.Bold}>
                  Pakistan's first minute app
                </CustomText>
                <CustomText
                  variant="h5"
                  fontFamily={Fonts.SemiBold}
                  style={styles.text}
                >
                  Login or Signup
                </CustomText>

                <CustomInput
                  onChangeText={(text) => setPhoneNumber(text.slice(0, 10))}
                  onClear={() => setPhoneNumber("")}
                  value={phoneNumber}
                  left={
                    <CustomText variant="h6" fontFamily={Fonts.SemiBold}>
                      + 92
                    </CustomText>
                  }
                  placeholder="Enter Mobile Number"
                  inputMode="numeric"
                />

                <CustomButton
                  title="Continue"
                  onPress={() => handleAuth()}
                  disabled={phoneNumber.length < 10}
                  loading={loading}
                />
              </View>
            </Animated.ScrollView>
          </PanGestureHandler>
        </CustomSafeAreaView>

        <View style={styles.footer}>
          <SafeAreaView>
            <CustomText fontSize={RFValue(7)}>
              By Continuing, you agree to our terms of Services & Privacy Policy
            </CustomText>
          </SafeAreaView>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 2,
    marginBottom: 10,
    opacity: 0.6,
  },
  subContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginBottom: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10,
    backgroundColor: "white",
    width: "100%",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginVertical: 10,
    marginTop: 20,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingBottom: 30,
    padding: 20,
    backgroundColor: "f9f8fc",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    paddingTop: 60,
    width: "100%",
  },
});
