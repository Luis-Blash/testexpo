import React, { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { ButtonCircule } from "../components/Buttons/ButtonCircule";
import { ContainerProduct } from "../components/Container/ContainerProduct";
import { PetContext } from "../context/PetContext";
import { getCardsModal } from "../helpers/getModels";
import { useCarrusel } from "../hooks/useCarrusel";
import { pathRoute } from "../navigator";
import { styleCards } from "../theme/styleCards";
import { Colors } from "../theme/stylesGlobal";
import { styleResponsive } from "../theme/stylesResponsive";
import { typeModal } from "../types/productsDog";

export const ScreenCards = ({ navigation }) => {
  const {
    petState: { answerQuestion, selectPet },
  } = useContext(PetContext);

  const [loadingModel, setLoadingModel] = useState(true);
  const { setCardProducts, isCardExist, infoView, nextInfo, totalCard } =
    useCarrusel();

  const getCards = () => {
    const { cards } = getCardsModal(answerQuestion, selectPet);
    setCardProducts(cards);
    setTimeout(() => {
      setLoadingModel(false);
    }, 3000);
  };

  useEffect(() => {
    getCards();
  }, []);

  const viewModel = () => {
    const { type, map } = infoView.model;
    console.log( type, map);
    navigation.navigate(pathRoute.screenViewModel, {
      typeModel: type,
      mapCostal: type === typeModal.costal ? map : "",
      mapLata: type === typeModal.cans ? map : "",
      mapPremios: type === typeModal.prize ? map : "",
    });
  };

  const finishAction = () => {
    navigation.navigate(pathRoute.screenWelcome);
  };

  if (loadingModel) {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/backgrounds/welcome.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            paddingLeft: 70,
            paddingRight: 70,
            justifyContent: "center",
          }}
        >
          <Text style={styleCards.textloading}>
            Estamos analizando tus respuestas en un momento te damos el
            resultado...
          </Text>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/backgrounds/question.png")}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        >
          <Header>
            <Text style={styleCards.headerText}>{selectPet}</Text>
          </Header>
          <ContainerProduct stylesContainer={{ height: "75%" }}>
            <View style={styleCards.containerHeader}>
              <Text style={styleCards.titleHeader}>{infoView.title}</Text>
              <Text style={styleCards.subtitleHeader}>{infoView.subtitle}</Text>
            </View>
            <View style={styleCards.containerBody}>
              <ListPoints points={infoView.points} />
            </View>
            <View style={styleCards.containerImages}>
              <View style={styleCards.subcontainerimages}>
                <Image style={styleCards.images} source={infoView.img} />
              </View>
            </View>
          </ContainerProduct>
          <View style={styleCards.footer}>
            {isCardExist && (
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 6,
                  justifyContent: "center",
                }}
              >
                <ButtonCircule
                  img={require("../../assets/iconos/cubo.png")}
                  action={viewModel}
                  stylesButton={{
                    backgroundColor: Colors.secondaryblue,
                    marginRight: 10,
                  }}
                />
                {totalCard > 1 && (
                  <ButtonCircule
                    img={require("../../assets/iconos/arrow.png")}
                    action={nextInfo}
                    stylesButton={{
                      paddingLeft: 15,
                      paddingRight: 15,
                      backgroundColor: Colors.primaryblue,
                    }}
                  />
                )}
              </View>
            )}
            <ButonPrimary action={finishAction}>Finalizar</ButonPrimary>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

const Header = ({ children }) => {
  return (
    <View style={styleCards.header}>
      <Text>{children}</Text>
    </View>
  );
};

const ListPoints = ({ points = [] }) => {
  if (points.length > 0) {
    return (
      <View>
        {points.map((point, index) => (
          <View
            key={`${index}-point`}
            style={styleResponsive.contianerPointsCards}
          >
            <Text>
              {"\u2022"}
              {"  "}
            </Text>
            <Text style={styleResponsive.fontSizeListPoints}>{point}</Text>
          </View>
        ))}
      </View>
    );
  } else {
    return <></>;
  }
};
