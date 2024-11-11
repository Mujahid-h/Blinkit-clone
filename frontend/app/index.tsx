import "react-native-gesture-handler";
import Navigation from "@navigation/Navigation";
import * as Font from "expo-font";
import { useState, useEffect } from "react";

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "Okra-Regular": require("@assets/fonts/Okra-Regular.ttf"),
      "Okra-Medium": require("@assets/fonts/Okra-Medium.ttf"),
      "Okra-MediumLight": require("@assets/fonts/Okra-MediumLight.ttf"),
      "Okra-Bold": require("@assets/fonts/Okra-Bold.ttf"),
      "Okra-ExtraBold": require("@assets/fonts/Okra-ExtraBold.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (fontsLoaded) {
    return <Navigation />;
  }
}
