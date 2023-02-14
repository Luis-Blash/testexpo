import { StyleSheet } from "react-native";
import { Colors, FontFamilyType } from "./stylesGlobal";

const styleRequest = StyleSheet.create({
  card: {
    backgroundColor: "white",
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 55,
    paddingBottom: 55,
    borderRadius: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  cardH1: {
    fontFamily: FontFamilyType.gothabold,
    fontSize: 35,
    textAlign: "center",
    marginBottom: 15,
  },
  cardText: {
    fontFamily: FontFamilyType.gothabold,
    textAlign: "center",
    color: Colors.primarygrayblack,
    fontSize: 18
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export { styleRequest };
