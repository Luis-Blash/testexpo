export const petAction = {
  getQuestion: "getQuestion",
  setLoading: "setLoading",
  setAnswerQuestion: "setAnswerQuestion",
  setSelectPet: "setSelectPet",
};

export const petReducer = (state, action = { type: "", payload: null }) => {
  // return state
  switch (action.type) {
    case petAction.getQuestion:
      return {
        ...state,
        loading: false,
        questions: action.payload.questions,
        nameQuestion: action.payload.nameQuestion,
        totalQuestion: action.payload.totalQuestion,
        pointsQuestion: action.payload.pointsQuestion
      };
    case petAction.setLoading:
      return { ...state, loading: action.payload.loading };
    case petAction.setAnswerQuestion:
      return { ...state, answerQuestion: action.payload.answerQuestion };
    case petAction.setSelectPet:
      return { ...state, selectPet: action.payload.selectPet };
    default:
      return state;
  }
};
