import { Colors, Fonts } from "@utils/Constants";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "@expo/vector-icons/Ionicons";

interface InputProps {
  left: React.ReactNode;
  onClear?: () => void;
  right: boolean;
}

const CustomInput: React.FC<InputProps & TextInputProps> = ({
  left,
  onClear,
  right = true,
  ...props
}) => {
  return (
    <View>
      {left}
      <TextInput
        {...props}
        placeholderTextColor={"#ccc"}
        style={styles.inputContainer}
      />
      <View style={styles.icon}>
        {props.value?.length != 0 && right && (
          <TouchableOpacity onPress={onClear}>
            <Icon name="close-circle-sharp" size={RFValue(16)} color={"#ccc"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  text: {
    width: "10%",
    marginLeft: 10,
  },

  flexrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    borderWidth: 0.5,
    marginVertical: 10,
    backgroundColor: "fff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowColor: Colors.border,
    borderColor: Colors.border,
  },

  inputContainer: {
    width: "75%",
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(12),
    paddingVertical: 14,
    paddingBottom: 15,
    height: "100%",
    color: Colors.text,
    bottom: -1,
  },

  icon: {
    width: "5%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
