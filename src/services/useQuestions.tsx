import { useEffect, useState } from "react";
import { TQuestion } from "../components/Question/TQuestion";

const QUESTIONS_BASE_URL = "https://api.sampleapis.com/futurama/questions";
const randomise = () => Math.random() - 0.5;

const useQuestions = (NUMBER_OF_QUESTIONS_IN_QUIZ: number) => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<TQuestion[] | null>(null);

  useEffect(() => {
    if(questions) return;
    
    const getQuestions = async () => {
      setIsPending(true);
      try {
        const resp = await fetch(QUESTIONS_BASE_URL);
        const json: TQuestion[] = await resp.json();
        setQuestions(
          json.sort(randomise).slice(0, NUMBER_OF_QUESTIONS_IN_QUIZ)
        );
        setIsPending(false);
      } catch (error) {
        let message;
        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }
        setError(message);
        setIsPending(false);
      }
    };
    getQuestions();
  }, [NUMBER_OF_QUESTIONS_IN_QUIZ, questions]);

  return { error, questions, isPending, setQuestions };
};

export default useQuestions;
