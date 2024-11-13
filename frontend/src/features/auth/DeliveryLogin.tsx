import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const DeliveryLogin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleLogin = async () => {
    return;
  };

  return (
    <View>
      <Text>DeliveryLogin</Text>
    </View>
  );
};

export default DeliveryLogin;

const styles = StyleSheet.create({});
