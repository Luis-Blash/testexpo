import { StyleSheet } from "react-native";

const Colors = {
  primaryblue: "#0085CA",
  primarygray: "#B1B3B3",
  primarygrayblack: "#75787B",
  secondaryblue: "#1B365D",
  secondarywhite: "#FFFFFF",
};

const FontFamilyType = {
  gothabold: "gothabold",
  gothalight: "gothalight",
  gothablack: "gothablack",
};

const colorsGlobal = StyleSheet.create({
  backprimaryblue: {
    backgroundColor: "#0085CA",
  },
  backprimarygray: {
    backgroundColor: "#B1B3B3",
  },
  backprimarygrayblack: {
    backgroundColor: "#75787B",
  },
  backsecondaryblue: {
    backgroundColor: "#1B365D",
  },
  backsecondarywhite: {
    backgroundColor: "#FFFFFF",
  },
});

const styleGlobal = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

const styleBackgrounds = StyleSheet.create({
  welcome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const styleWelcome = StyleSheet.create({
  backgroundImages: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});

export {
  styleGlobal,
  styleBackgrounds,
  styleWelcome,
  colorsGlobal,
  Colors,
  FontFamilyType,
};
