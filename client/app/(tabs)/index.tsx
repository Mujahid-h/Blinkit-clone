// import { Redirect } from "expo-router";

// export default function Index() {
//   return <Redirect href="/splash" />;
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@features/auth/SplashScreen";
import CustomerLogin from "@features/auth/CustomerLogin";
import DeliveryLogin from "@features/auth/DeliveryLogin";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerLogin"
          component={CustomerLogin}
          options={{ title: "Customer Login" }}
        />
        <Stack.Screen
          name="DeliveryLogin"
          component={DeliveryLogin}
          options={{ title: "Delivery Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
