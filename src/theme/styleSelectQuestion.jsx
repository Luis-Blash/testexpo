import { StyleSheet } from "react-native";
import { Colors } from "./stylesGlobal";

const styleSelectQuestion = StyleSheet.create({
  imgback: { flex: 1 },
  containerheader: {
    backgroundColor: Colors.secondaryblue,
    height: "15%",
  },
  body: {
    height: "55%",
  },
  imageBody: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  question: {
    height: "30%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
  },
});

export { styleSelectQuestion };
