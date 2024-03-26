import { createContext } from "react";
import { IGameContext } from "./IGameContext";

export const GameContext = createContext<IGameContext>({
  currentQuestion: undefined,
  setCurrentQuestion: () => {},
  answersMap: undefined,
  setAnswersMap: () => {},
  error: null,
  isPending: false,
  questions: null,
  score: 0,
  setScore: () => {},
  isGameOver: false,
  handleNextQuestion: () => {},
  answerHasBeenSelected: false,
  setAnswerHasBeenSelected: () => {},
  resetGame: () => {},
});
