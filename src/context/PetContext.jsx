import React, { createContext, useReducer } from "react";
import { getQuestionType } from "../helpers/getQuestionType";
import { petAction, petReducer } from "./petReducer";

export const petInitialState = {
  loading: false,
  questions: [],
  nameQuestion: "",
  pointsQuestion: {
    text: "",
    points: [],
  },
  totalQuestion: 0,
  answerQuestion: [],
  selectPet: "",
};

export const PetContext = createContext({});

export const PetProvider = ({ children }) => {
  const [petState, dispatch] = useReducer(petReducer, petInitialState);

  const getQuestion = (payload = { id: 0, name: "" }) => {
    dispatch({ type: petAction.setLoading, payload: { loading: true } });
    const { findQuestion, questionName, total, infoQuestion} = getQuestionType(payload);
    dispatch({
      type: petAction.getQuestion,
      payload: {
        questions: findQuestion,
        nameQuestion: questionName,
        totalQuestion: total,
        pointsQuestion: infoQuestion
      },
    });
  };

  const setAnswerQuestion = (payload = { answer: [] }) => {
    const { answer } = payload;
    dispatch({
      type: petAction.setAnswerQuestion,
      payload: {
        answerQuestion: answer,
      },
    });
  };

  const setSelectPet = (payload = { pet: "" }) => {
    const { pet } = payload;
    dispatch({
      type: petAction.setSelectPet,
      payload: {
        selectPet: pet,
      },
    });
  };
  return (
    <PetContext.Provider
      value={{
        petState,
        getQuestion,
        setAnswerQuestion,
        setSelectPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
