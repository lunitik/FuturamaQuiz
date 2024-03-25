import { SetStateAction, useState } from "react";
import "./Question.scss";
import { TQuestion } from "./TQuestion";
import { TPossibleAnswersMap } from "./TPossibleAnswersMap";
import { AnswerResult } from "./AnswerResult";

interface IQuestionProps {
  question: TQuestion;
  answersMap: TPossibleAnswersMap;
  setAnswersMap: React.Dispatch<
    SetStateAction<TPossibleAnswersMap | undefined>
  >;
}

const Question = ({ question, answersMap, setAnswersMap }: IQuestionProps) => {
  const [answerHasBeenSelected, setAnswerHasBeenSelected] = useState(false);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    if (answersMap && answer in answersMap) {
      setAnswersMap({
        ...answersMap,
        [answer]:
          question.correctAnswer === answer
            ? AnswerResult.Correct
            : AnswerResult.Wrong,
      });
      setAnswerHasBeenSelected(true);
    }
  };

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="possible-answers">
        {answersMap &&
          question.possibleAnswers.map((possibleAnswer, idx) => {
            return (
              <div className="possible-answer" key={`answer-${idx}`}>
                <button
                  className={`btn ${answersMap[possibleAnswer]}`}
                  value={possibleAnswer}
                  onClick={handleOnClick}
                  disabled={answerHasBeenSelected}
                >
                  {possibleAnswer}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Question;
