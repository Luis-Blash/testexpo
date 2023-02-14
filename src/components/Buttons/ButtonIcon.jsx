import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styleButtons } from "./styleButton";

export const ButtonIcon = ({
  img = "",
  action = () => {
  },
  stylesButton = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{...styleButtons.containerIcon,...stylesButton }}
      disabled={disabled}
    >
      <Image style={styleButtons.imgArrow} source={img} />
    </TouchableOpacity>
  );
};
