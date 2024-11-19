import { Alert, Keyboard, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { resetAndNavigate } from "@utils/NavigationUtils";
import { delivery_login } from "@service/authService";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";
import { screenHeight } from "@utils/Scaling";
import LottieView from "lottie-react-native";
import CustomText from "@components/ui/CustomText";
import { Fonts } from "@utils/Constants";
import CustomInput from "@components/ui/CustomInput";
import Icon from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from "@components/ui/CustomButton";

const DeliveryLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    Keyboard.dismiss();
    try {
      await delivery_login(email, password);
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
          </View>

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

          <CustomInput
            left={
              <Icon
                name="mail"
                style={{ marginLeft: 10 }}
                color="#f8890e"
                size={RFValue(18)}
              />
            }
            right={false}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            inputMode="email"
          />

          <CustomInput
            left={
              <Icon
                name="key-sharp"
                style={{ marginLeft: 10 }}
                color="#f8890e"
                size={RFValue(18)}
              />
            }
            right={false}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          <CustomButton
            disabled={email.length == 0 || password.length < 8}
            title="Login"
            onPress={handleLogin}
            loading={loading}
          />
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
    height: screenHeight * 0.2,
    width: "100%",
  },
  text: {
    marginTop: 2,
    marginBottom: 25,
    opacity: 0.7,
  },
});
