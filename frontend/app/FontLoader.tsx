// FontLoader.tsx
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const FontLoader: React.FC = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts
  const loadFonts = async () => {
    await Font.loadAsync({
      "Okra-Regular": require("@assets/fonts/Okra-Regular.ttf"),
      "Okra-Medium": require("@assets/fonts/Okra-Medium.ttf"),
      "Okra-MediumLight": require("@assets/fonts/Okra-MediumLight.ttf"),
      "Okra-Bold": require("@assets/fonts/Okra-Bold.ttf"),
      "Okra-ExtraBold": require("@assets/fonts/Okra-ExtraBold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <>{children}</>;
};

export default FontLoader;
