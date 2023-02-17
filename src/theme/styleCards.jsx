import { StyleSheet } from "react-native";
import { Colors, FontFamilyType } from "./stylesGlobal";

const styleCards = StyleSheet.create({
  textloading: {
    fontFamily: FontFamilyType.gothablack,
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  header: {
    height: "10%",
    backgroundColor: Colors.secondaryblue,
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontFamily: FontFamilyType.gothabold,
  },
  titleHeader: {
    fontFamily: FontFamilyType.gothabold,
    color: Colors.secondaryblue,
    fontSize: 20,
  },
  subtitleHeader: {
    fontFamily: FontFamilyType.gothabold,
    color: Colors.secondaryblue,
    fontSize: 15,
  },
  containerHeader: { height: "15%" },
  containerBody: {
    height: "50%",
  },
  containerImages: {
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainerimages: {
    width: "40%",
    height: "100%",
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  footer: {
    height: "15%",
    paddingLeft: "20%",
    paddingRight: "20%",
    justifyContent: "center",
  },
});

export { styleCards };
