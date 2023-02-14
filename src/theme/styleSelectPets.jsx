import { StyleSheet } from "react-native";
import { FontFamilyType } from "./stylesGlobal";

const styleSelectPets = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  textHeader: {
    color: "white",
    fontSize: 30,
    fontFamily: FontFamilyType.gothabold
  },
  containerimages: {
    alignItems: "center",
  },
  images: {
    height: 100,
    width: 100,
    resizeMode: "stretch",
    marginBottom: 20,
  },
});

export { styleSelectPets };