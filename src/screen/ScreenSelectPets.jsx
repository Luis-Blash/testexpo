import { useContext } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { PetContext } from "../context/PetContext";
import { pathRoute } from "../navigator";
import { styleSelectPets } from "../theme/styleSelectPets";
import { styleResponsive } from "../theme/stylesResponsive";

export const ScreenSelectPets = ({ navigation }) => {
  const { setAnswerQuestion } = useContext(PetContext);
  const goNavigate = (type = "") => {
    setAnswerQuestion({ answer: [] });
    if (type === "Perro") {
      navigation.navigate(pathRoute.screenSelectQuestion, {
        name: type,
        id: 0,
      });
    }
    if (type === "Gato") {
      navigation.navigate(pathRoute.screenSelectQuestion, {
        name: type,
        id: 0,
      });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/backgrounds/welcome.png")}
        resizeMode="cover"
        style={styleSelectPets.background}
      >
        <View style={styleSelectPets.container1}>
          <Text style={styleSelectPets.textHeader}>Selecciona a tu</Text>
          <Text style={styleSelectPets.textHeader}>tipo de mascota</Text>
        </View>
        <View style={styleResponsive.selectPetContainer}>
          <Pets
            text="Perro"
            action={() => {
              goNavigate("Perro");
            }}
            image={require("../../assets/images/dog.png")}
          />
          <Pets
            text="Gato"
            action={() => {
              goNavigate("Gato");
            }}
            image={require("../../assets/images/cat.png")}
          />
        </View>
        <View style={{ flex: 1 }} />
      </ImageBackground>
    </View>
  );
};

const Pets = ({ text = "", image = "", action = () => {} }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <View style={styleSelectPets.containerimages}>
        <Image style={styleSelectPets.images} source={image} />
      </View>
      <View>
        <ButonPrimary action={action}>{text}</ButonPrimary>
      </View>
    </View>
  );
};
