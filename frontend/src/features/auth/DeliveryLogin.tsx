import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { resetAndNavigate } from "@utils/NavigationUtils";

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
    <View>
      <Text>DeliveryLogin</Text>
    </View>
  );
};

export default DeliveryLogin;

const styles = StyleSheet.create({});
