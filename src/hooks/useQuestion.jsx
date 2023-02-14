import { useState } from "react";

export const useQuestion = () => {
  const [selectQuestionId, setSelectQuestionId] = useState(-1);
  const [addPet, setAddPet] = useState({});
  const [infoQuestion, setInfoQuestion] = useState({
    name: "",
    img: "",
  });
  const [isFirstQuestion, setIsFirstQuestion] = useState(false);

  const setSelectQuestion = (img, id, pet = {}) => {
    setInfoQuestion({
        ...infoQuestion,
        img
    })
    setSelectQuestionId(id);
    setAddPet(pet);
  };

  const setResetData = (name, firs, idquestion, img) => {
    setInfoQuestion({
        name,
        img
    })
    setIsFirstQuestion(firs);
    setSelectQuestionId(idquestion);
  };

  return {
    setSelectQuestion,
    setResetData,
    selectQuestionId,
    infoQuestion,
    addPet,
    isFirstQuestion,
  };
};
