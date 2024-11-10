import Navigation from "@navigation/Navigation";
import "react-native-gesture-handler";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function Index() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <Navigation />
    </KeyboardAvoidingView>
  );
}
