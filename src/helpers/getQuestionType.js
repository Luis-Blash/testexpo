import { questionsCats } from "../types/questionCat";
import { questionsDogs } from "../types/questionDog";

const getQuestionType = (payload = { id: 0, name: "" }) => {
  const { id, name } = payload;
  let findQuestion = [];
  let questionName = "";
  let infoQuestion = {
    title: "",
    points: []
  }
  let total = 0;
  if (name === "Perro") {
    const find = questionsDogs.find((dog) => dog.id === id);
    if (find) {
      const { question, answers } = find;
      findQuestion = answers;
      questionName = question;
      total = questionsDogs.length;
      infoQuestion = find.infoText
    }
  }
  if (name === "Gato") {
    const find = questionsCats.find((dog) => dog.id === id);
    if (find) {
      const { question, answers } = find;
      findQuestion = answers;
      questionName = question;
      total = questionsCats.length;
      infoQuestion = find.infoText
    }
  }
  return {
    findQuestion,
    questionName,
    total,
    infoQuestion
  };
};

export { getQuestionType };
