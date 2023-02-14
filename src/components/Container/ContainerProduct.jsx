import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  body: {
    height: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export const ContainerProduct = ({ children, stylesContainer = {} }) => {
  return <View style={{ ...styles.body, ...stylesContainer }}>{children}</View>;
};
