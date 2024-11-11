import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export default function useKeyboardOffsetHeight() {
  const [offsetHeight, setOffsetHeight] = useState(0);

  useEffect(() => {
    const keyboardWillAndroidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => setOffsetHeight(e.endCoordinates.height)
    );

    const keyboardWillAndroidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      (e) => setOffsetHeight(0)
    );

    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (e) => setOffsetHeight(e.endCoordinates.height)
    );

    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      (e) => setOffsetHeight(0)
    );

    return () => {
      keyboardWillAndroidHideListener.remove();
      keyboardWillAndroidShowListener.remove();
      keyboardWillHideListener.remove();
      keyboardWillShowListener.remove();
    };
  }, []);

  return offsetHeight;
}
