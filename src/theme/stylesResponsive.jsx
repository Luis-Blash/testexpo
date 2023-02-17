import { Dimensions, StyleSheet } from "react-native";
import { Colors, FontFamilyType } from "./stylesGlobal";

const { height } = Dimensions.get("window");

let fontSizeWelcome = 35;
let fontSizeWelcomeSub = 15;
let paddinsXSelectPets = 80;
let paddinBottonQuestion = height < 700 ? 20 : 30;
let imagesContainerQuestion = height < 700 ? 150 : 200;
let paddingYcontainerButtons = height < 700 ? 6 : 12;
let fontSizeContainerQuestion = 10;
let paddinXRequest = 20;
let fontSizePoints = 13;
let fontSizeButtonPrimary = 15;
let paddinxContianerPoints = "10%";
let fontsizeContainerSelect = 13;
let titleHeaderSelectCard = 20;
let widthSelectCardContainerImg = "40%"
// height < 700 ? 20 : 50
//* 700 mini
//* 800 normal
//* 900 grande
if ( height <= 799) {

} else if (height >= 800 && height <= 900) {
  paddinXRequest = 50;
  fontSizePoints = 16;
} else if (height >= 901) {
  fontSizeWelcome = 50;
  fontSizeWelcomeSub = 30;
  paddinsXSelectPets = 200;
  fontSizeContainerQuestion = 15;
  paddinXRequest = 200;
  fontSizePoints = 20;
  fontSizeButtonPrimary = 25;
  fontsizeContainerSelect = 20;
  titleHeaderSelectCard = 30;
  widthSelectCardContainerImg = "30%"
}

const styleResponsive = StyleSheet.create({
  buttonTextButtonPrimary: {
    color: "white",
    fontFamily: FontFamilyType.gothabold,
    fontSize: fontSizeButtonPrimary,
    textAlign: "center",
  },
  textH1Welcome: {
    color: "white",
    fontFamily: FontFamilyType.gothabold,
    fontSize: fontSizeWelcome,
  },
  textSubIndiceWelcome: {
    color: "white",
    fontFamily: FontFamilyType.gothabold,
  },
  textH2Welcome: {
    fontSize: fontSizeWelcomeSub,
    fontFamily: FontFamilyType.gothalight,
    color: "white",
    textAlign: "center",
  },
  selectPetContainer: {
    flex: 2,
    paddingTop: 60,
    paddingLeft: paddinsXSelectPets,
    paddingRight: paddinsXSelectPets,
  },
  textBodyQuestion: {
    fontFamily: FontFamilyType.gothablack,
    color: "#0085CA",
    fontSize: height < 700 ? 18 : 25,
    textAlign: "center",
  },
  containerImageQuestion: {
    height: imagesContainerQuestion,
    width: imagesContainerQuestion,
  },
  containerSelectQuestion: {
    backgroundColor: Colors.secondaryblue,
    paddingTop: 20,
    paddingBottom: paddinBottonQuestion,
    paddingLeft: "20%",
    paddingRight: "20%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerButtonsQuestion: {
    marginBottom: 12,
    paddingTop: paddingYcontainerButtons,
    paddingBottom: paddingYcontainerButtons,
  },
  containerNextButtonQuestion: {
    paddingTop: paddingYcontainerButtons,
    paddingBottom: paddingYcontainerButtons,
  },
  textFonsizeContiainerQuestion: {
    fontSize: fontSizeContainerQuestion,
    fontFamily: FontFamilyType.gothablack,
    color: Colors.primarygrayblack,
  },
  backgroundRequest: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: paddinXRequest,
    paddingRight: paddinXRequest,
  },
  fontSizeListPoints: {
    fontSize: fontSizePoints,
    fontFamily: FontFamilyType.gothalight,
  },
  contianerPointsCards: {
    flexDirection: "row",
    paddingLeft: paddinxContianerPoints,
    paddingRight: paddinxContianerPoints,
  },
  selectButtonText: {
    fontFamily: FontFamilyType.gothabold,
    fontSize: fontsizeContainerSelect,
  },
  titleHeaderSelectCard: {
    fontFamily: FontFamilyType.gothabold,
    color: Colors.secondaryblue,
    fontSize: titleHeaderSelectCard,
  },
  subcontainerimagesSelectCard: {
    width: widthSelectCardContainerImg,
    height: "100%",
  },
});

export { styleResponsive };
