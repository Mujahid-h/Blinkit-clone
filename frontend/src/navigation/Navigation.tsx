import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@features/auth/SplashScreen";
import CustomerLogin from "@features/auth/CustomerLogin";
import DeliveryLogin from "@features/auth/DeliveryLogin";
import { navigationRef } from "@utils/NavigationUtils";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="CustomerLogin"
          component={CustomerLogin}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name="DeliveryLogin"
          component={DeliveryLogin}
          options={{ animation: "fade" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}