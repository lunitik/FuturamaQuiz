import { Dispatch, SetStateAction } from "react";
import { TPossibleAnswersMap } from "../components/Question/TPossibleAnswersMap";
import { TQuestion } from "../components/Question/TQuestion";

export interface IGameContext {
  currentQuestion: TQuestion | undefined;
  setCurrentQuestion: Dispatch<SetStateAction<TQuestion | undefined>>;
  answersMap: TPossibleAnswersMap | undefined;
  setAnswersMap: Dispatch<SetStateAction<TPossibleAnswersMap | undefined>>;
  error: string | null;
  isPending: boolean;
  questions: TQuestion[] | null;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  isGameOver: boolean;
  handleNextQuestion: () => void;
  answerHasBeenSelected: boolean;
  setAnswerHasBeenSelected: Dispatch<SetStateAction<boolean>>;
  resetGame: () => void;
}
