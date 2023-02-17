import { Dimensions, ImageBackground, Text, View } from "react-native";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { pathRoute } from "../navigator";
import { styleWelcome } from "../theme/stylesGlobal";
import { version } from "../../package.json";
import { styleResponsive } from "../theme/stylesResponsive";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { typeModal } from "../types/productsDog";

const { height, width } = Dimensions.get("window");

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

let customFonts = {
  gothabold: require("../../assets/fonts/Gotham-Bold.otf"),
  gothalight: require("../../assets/fonts/Gotham-Light.otf"),
  gothablack: require("../../assets/fonts/Gotham-Black.otf"),
};

export const ScreenWelcome = ({ navigation }) => {
  const goNavigate = () => {
    navigation.navigate(pathRoute.screenSelectPets);
    // navigation.navigate(pathRoute.screenViewModel, {
    //   typeModel: 1,
    //   map: "",
    // });
  };

  const modelsGo = (map, type) => {
    navigation.navigate(pathRoute.screenViewModel, {
      typeModel: type,
      mapCostal: type === typeModal.costal ? map : "",
      mapLata: type === typeModal.cans ? map : "",
      mapPremios: type === typeModal.prize ? map : "",
    });
  };
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(customFonts);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../../assets/backgrounds/welcome.png")}
        resizeMode="cover"
        style={{ ...styleWelcome.backgroundImages }}
      >
        <View style={{ ...styleWelcome.container }}>
          <Text
            style={{
              ...styleResponsive.textH1Welcome,
              marginBottom: 10,
            }}
          >
            ¡Bienvenidos!
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{ ...styleResponsive.textH1Welcome }}
            >
              NUPEC
            </Text>
            <Text style={{ ...styleResponsive.textSubIndiceWelcome}}>MR</Text>
          </View>
          <Text style={{ ...styleResponsive.textH2Welcome, marginBottom: 20 }}>
            Estás listo para conocer más acerca de nuestros productos y conocer
            lo que más favorece a tu mascota.
          </Text>
          <ButonPrimary action={goNavigate}>Comenzar</ButonPrimary>
          <View style={{ marginBottom: 5, marginTop: 10 }}>
            <ButonPrimary
              action={() => {
                modelsGo(
                  require("../../assets/lata/texture/TXT_HUMEDO_CANINO_SENIOR_AL.png"),
                  typeModal.cans
                );
              }}
            >
              Lata
            </ButonPrimary>
          </View>
          <View style={{ marginBottom: 5, marginTop: 5 }}>
            <ButonPrimary
              action={() => {
                modelsGo(
                  require("../../assets/premios/ColorTest.png"),
                  typeModal.prize
                );
              }}
            >
              Premios
            </ButonPrimary>
          </View>
          <View style={{ marginBottom: 5, marginTop: 5 }}>
            <ButonPrimary
              action={() => {
                modelsGo(
                  require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_DIGESTIVEHEALTH_AL.png"),
                  typeModal.costal
                );
              }}
            >
              Costales1
            </ButonPrimary>
          </View>
          <View style={{ marginBottom: 5, marginTop: 5 }}>
            <ButonPrimary
              action={() => {
                modelsGo(
                  require("../../assets/costal2/textures/TXT_ESPECIALIDAD_FELINO_DIGESTIVEHEALTH_AL.png"),
                  typeModal.costal2
                );
              }}
            >
              Costales2
            </ButonPrimary>
          </View>
        </View>
      </ImageBackground>
      <View style={{ position: "absolute", zIndex: 1, bottom: 10, left: 10 }}>
        <Text style={{ color: "white" }}>
          V-{version} h: {height.toFixed(2)} x w: {width.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
