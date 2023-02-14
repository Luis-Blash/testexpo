import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styleResponsive } from "../../theme/stylesResponsive";
import { styleButtons } from "./styleButton";

export const ButonPrimary = ({
  children,
  action = () => {
  },
  stylesButton = {},
  stylesText = {},
  disabled = false
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{ ...styleButtons.button1, ...stylesButton }}
      disabled={disabled}
    >
      <View>
        <Text style={{ ...styleResponsive.buttonTextButtonPrimary, ...stylesText }}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
