import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styleSelect } from "./styleSelect";

export const SelectAnswer = ({
  children,
  action = () => {
  },
  stylesButton = {},
  styleContainer = {},
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{ ...styleSelect.selectanswer, ...stylesButton }}
    >
      <View style={{ ...styleSelect.containeranswer, ...styleContainer }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
