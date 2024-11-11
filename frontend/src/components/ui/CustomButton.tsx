import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { Colors, Fonts } from "@utils/Constants";

interface CustomButtonProps {
  onPress: () => void;
  disabled: boolean;
  title: string;
  loading: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { backgroundColor: disabled ? Colors.disabled : Colors.secondary },
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.5}
    >
      {loading ? (
        <ActivityIndicator color={"white"} size={"small"} />
      ) : (
        <CustomText
          variant="h6"
          fontFamily={Fonts.SemiBold}
          style={styles.text}
        >
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,
  },
  text: {
    color: "#fff",
  },
});
