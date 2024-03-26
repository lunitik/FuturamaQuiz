import { useEffect, useState } from "react";
import { TQuestion } from "../components/Question/TQuestion";
import { TPossibleAnswersMap } from "../components/Question/TPossibleAnswersMap";
import useQuestions from "../services/useQuestions";
import { AnswerResult } from "../enums/AnswerResult";
import { GameContext } from "./GameContext";

const NUMBER_OF_QUESTIONS_IN_QUIZ = 5;

type TGameContextProviderProps = {
  children: React.ReactNode;
};

const GameContextProvider = ({ children }: TGameContextProviderProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<
    TQuestion | undefined
  >();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [answerHasBeenSelected, setAnswerHasBeenSelected] = useState(false);
  const [answersMap, setAnswersMap] = useState<
    TPossibleAnswersMap | undefined
  >();
  const [score, setScore] = useState<number>(0);
  const { error, questions, isPending } = useQuestions(
    NUMBER_OF_QUESTIONS_IN_QUIZ
  );

  const resetGame = () => {
    if (!questions) return;

    setCurrentQuestionIndex(0);
    setCurrentQuestion(questions[currentQuestionIndex]);
    setAnswerHasBeenSelected(false);
    setIsGameOver(false);
  };

  const handleNextQuestion = () => {
    if (questions && currentQuestionIndex < questions?.length - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      setCurrentQuestion(questions[nextQuestionIndex]);
      setAnswerHasBeenSelected(false);
    } else {
      setIsGameOver(true);
    }
  };

  useEffect(() => {
    if (!questions) return;
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    if (!currentQuestion) return;
    const answers: TPossibleAnswersMap = {};
    currentQuestion.possibleAnswers.map((possibleAnswer) => {
      answers[possibleAnswer] = AnswerResult.Default;
      return;
    });
    setAnswersMap(answers);
  }, [currentQuestion, setAnswersMap]);

  const exposedData = {
    currentQuestion,
    setCurrentQuestion,
    answersMap,
    setAnswersMap,
    error,
    isPending,
    questions,
    score,
    setScore,
    isGameOver,
    handleNextQuestion,
    answerHasBeenSelected,
    setAnswerHasBeenSelected,
    resetGame
  };

  return (
    <GameContext.Provider value={exposedData}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
