import React, { useContext, useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { pathRoute } from "../navigator";
import { PetContext } from "../context/PetContext";
import { SelectAnswer } from "../components/Select/SelectAnswer";
import { ButtonIcon } from "../components/Buttons/ButtonIcon";
import { styleSelectQuestion } from "../theme/styleSelectQuestion";
import { useQuestion } from "../hooks/useQuestion";
import { styleResponsive } from "../theme/stylesResponsive";
import { Colors } from "../theme/stylesGlobal";
import { HeaderBack } from "../components/Headers/HeaderBack";

export const ScreenSelectQuestion = ({ navigation, route }) => {
  const {
    petState: {
      loading,
      questions,
      nameQuestion,
      totalQuestion,
      answerQuestion,
      pointsQuestion,
    },
    getQuestion,
    setAnswerQuestion,
    setSelectPet,
  } = useContext(PetContext);

  const {
    setSelectQuestion,
    addPet,
    infoQuestion,
    isFirstQuestion,
    selectQuestionId,
    setResetData,
  } = useQuestion();

  const selectQuestion = (id) => {
    const { params } = route;
    if (selectQuestionId !== id) {
      const { img } = questions[id];
      setSelectQuestion(img, id, {
        ...questions[id],
        idfather: params.id,
        question: nameQuestion,
      });
    }
  };

  const nextQuestion = () => {
    const { params } = route;
    let questionsState = [...answerQuestion, addPet];
    setAnswerQuestion({ answer: questionsState });
    if (totalQuestion - 1 === params.id) {
      setSelectPet({ pet: params.name });
      navigation.replace(pathRoute.screenRequest);
    } else {
      let nextId = params.id + 1;
      navigation.navigate(pathRoute.screenSelectQuestion, {
        name: params.name,
        id: nextId,
      });
    }
  };

  const backQuestion = () => {
    const { params } = route;
    let questionsState = answerQuestion;
    questionsState.pop();
    setAnswerQuestion({ answer: questionsState });
    let nextId = params.id - 1;
    navigation.navigate(pathRoute.screenSelectQuestion, {
      name: params.name,
      id: nextId,
    });
  };

  const getQuestionPet = () => {
    const { params } = route;
    if (params) {
      setResetData(params.name, params.id > 0, -1, "");
      getQuestion(params);
    } else {
      navigation.navigate(pathRoute.screenSelectPets);
    }
  };

  useEffect(() => {
    getQuestionPet();
  }, [route]);

  if (loading) {
    return <View style={{ flex: 1 }} />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/backgrounds/question.png")}
          resizeMode="cover"
          style={styleSelectQuestion.imgback}
        >
          <View style={styleSelectQuestion.containerheader}>
            <HeaderBack
              action={backQuestion}
              isFirstQuestion={isFirstQuestion}
              name={infoQuestion.name}
              img={require("../../assets/iconos/flecha.png")}
            />
          </View>
          <View style={styleSelectQuestion.body}>
            <ImagesQuestion
              name={nameQuestion}
              img={infoQuestion.img}
              info={pointsQuestion}
            />
          </View>
          <View style={styleSelectQuestion.question}>
            <Body
              nextQuestion={nextQuestion}
              questions={questions}
              selectQuestionId={selectQuestionId}
              selectQuestion={selectQuestion}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
};

const ImagesQuestion = ({
  name = "",
  img = "",
  info = {
    text: "",
    points: [],
  },
}) => {
  return (
    <View style={{ justifyContent: "center", height: "100%" }}>
      <View
        style={{
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={styleResponsive.textBodyQuestion}>{name}</Text>
      </View>
      {info.text !== "" && (
        <View
          style={{ marginBottom: 10, paddingLeft: "28%", paddingRight: "20%" }}
        >
          <View style={{}}>
            <Text style={styleResponsive.textFonsizeContiainerQuestion}>
              {info.text}
            </Text>
          </View>
          {info.points.map((point, index) => (
            <View key={`${index}-info`} style={{ paddingLeft: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styleResponsive.textFonsizeContiainerQuestion}>
                  {"\u2022"}
                  {"  "}
                </Text>
                <Text style={styleResponsive.textFonsizeContiainerQuestion}>
                  {point}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
      <View style={{ alignItems: "center" }}>
        <View style={styleResponsive.containerImageQuestion}>
          {img !== "" && (
            <Image style={styleSelectQuestion.imageBody} source={img} />
          )}
        </View>
      </View>
    </View>
  );
};

const Body = ({
  questions = [],
  nextQuestion = () => {},
  selectQuestion = () => {},
  selectQuestionId = -1,
}) => {
  return (
    <View style={styleResponsive.containerSelectQuestion}>
      {questions.map((answer, i) => {
        let style = { borderWidth: 2, borderColor: Colors.primarygrayblack };
        let isSelect = false;
        if (selectQuestionId === answer.id) {
          isSelect = true;
          style = { borderWidth: 2, borderColor: "#0085CA" };
        }
        return (
          <SelectAnswer
            key={`${i}-answer`}
            action={() => {
              selectQuestion(answer.id);
            }}
            styleContainer={{
              ...style,
              ...styleResponsive.containerButtonsQuestion,
            }}
          >
            {isSelect ? (
              <Image
                style={{ width: 20, height: 20, resizeMode: "contain" }}
                source={require("../../assets/iconos/correct.png")}
              />
            ) : (
              <View />
            )}
            <Text
              style={{
                ...styleResponsive.selectButtonText,
                color: isSelect ? "#0085CA" : Colors.primarygrayblack,
              }}
            >
              {answer.name}
            </Text>
            <View />
          </SelectAnswer>
        );
      })}
      <ButonPrimary
        stylesButton={{
          ...styleResponsive.containerNextButtonQuestion,
          backgroundColor: selectQuestionId < 0 ? "#ccc" : "#0085CA",
        }}
        disabled={selectQuestionId < 0}
        action={nextQuestion}
      >
        Siguiente
      </ButonPrimary>
    </View>
  );
};
