import { Image, ImageBackground, Text, View } from "react-native";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { pathRoute } from "../navigator";
import { styleRequest } from "../theme/styleRequest";
import { styleResponsive } from "../theme/stylesResponsive";

export const ScreenRequest = ({ navigation }) => {
  const goNavigate = () => {
    navigation.navigate(pathRoute.screenCards);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/backgrounds/welcome.png")}
        resizeMode="cover"
        style={styleResponsive.backgroundRequest}
      >
        <View style={styleRequest.card}>
          <Image style={styleRequest.img} source={require('../../assets/iconos/cara.png')} />
          <Text style={styleRequest.cardH1}>¡Felicidades!</Text>
          <Text style={styleRequest.cardText}>
            Has terminado la serie de preguntas y en un momentos te daremos
            nuestras recomendaciones
          </Text>
        </View>
        <View>
          <ButonPrimary action={goNavigate}>Siguiente</ButonPrimary>
        </View>
      </ImageBackground>
    </View>
  );
};
