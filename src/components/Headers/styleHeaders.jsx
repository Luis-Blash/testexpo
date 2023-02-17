import { StyleSheet } from "react-native";
import { FontFamilyType } from "../../theme/stylesGlobal";

const styleHeaders = StyleSheet.create({
  headerContainer: {
    height: "100%",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  containerHeaderFlex: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  },
  textHeader: {
    fontFamily: FontFamilyType.gothabold,
    fontSize: 25,
    color: "white",
  },
});

export { styleHeaders };
