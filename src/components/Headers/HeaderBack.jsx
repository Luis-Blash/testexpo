import React from "react";
import { Text, View } from "react-native";
import { ButtonIcon } from "../Buttons/ButtonIcon";
import { styleHeaders } from "./styleHeaders";

export const HeaderBack = ({
  action = () => {},
  name = "",
  isFirstQuestion = false,
  img = "",
}) => {
  return (
    <View style={styleHeaders.headerContainer}>
      <View style={styleHeaders.containerHeaderFlex}>
        <View>
          {isFirstQuestion && <ButtonIcon action={action} img={img} />}
        </View>
        <Text style={styleHeaders.textHeader}>{name}</Text>
        <View />
      </View>
    </View>
  );
};
