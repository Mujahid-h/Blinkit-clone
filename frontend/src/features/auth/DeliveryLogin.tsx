import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { resetAndNavigate } from "@utils/NavigationUtils";
import { delivery_login } from "@service/authService";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import { screenHeight } from "@utils/Scaling";
import LottieView from "lottie-react-native";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";

const DeliveryLogin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await delivery_login();
      resetAndNavigate("DeliveryDashboard");
    } catch (error) {
      Alert.alert(" Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomSafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        keyboardDismissMode="on-drag"
      >
        <View style={styles.container}>
          <View style={styles.lottieContainer}>
            <LottieView
              autoPlay
              loop
              style={styles.lottie}
              source={require("@assets/animations/delivery_man.json")}
            />

            <CustomText variant="h3" fontFamily={Fonts.Bold}>
              Delivery Partner Portal
            </CustomText>

            <CustomText
              variant="h6"
              fontFamily={Fonts.SemiBold}
              style={styles.text}
            >
              Faster than Flash ⚡⚡
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default DeliveryLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
  lottieContainer: {
    height: screenHeight * 0.12,
    width: "100%",
  },
  text: {
    marginTop: 2,
    marginBottom: 25,
    opacity: 0.7,
  },
});
