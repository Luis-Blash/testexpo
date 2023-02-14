import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styleButtons } from "./styleButton";

export const ButtonCircule = ({
  img = "",
  action = () => {},
  stylesButton = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{ ...styleButtons.containerCircule, ...stylesButton }}
      disabled={disabled}
    >
      <Image style={styleButtons.imgArrow} source={img} />
    </TouchableOpacity>
  );
};
