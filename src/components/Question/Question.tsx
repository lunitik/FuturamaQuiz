import { useContext } from "react";
import "./Question.scss";
import { AnswerResult } from "../../enums/AnswerResult";
import { GameContext } from "../../context/GameContext";

const Question = () => {
  const {
    currentQuestion,
    answersMap,
    setAnswersMap,
    isPending,
    error,
    setScore,
    answerHasBeenSelected,
    setAnswerHasBeenSelected,
    isGameOver
  } = useContext(GameContext);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    if (answersMap && answer in answersMap) {
      const answerWasCorrect = currentQuestion && currentQuestion.correctAnswer === answer;
      setAnswersMap({
        ...answersMap,
        [answer]:
        answerWasCorrect
            ? AnswerResult.Correct
            : AnswerResult.Wrong,
      });
      setAnswerHasBeenSelected(true);
      if (answerWasCorrect) {
        setScore(prevState => prevState + 1);
      }
    }
  };

  if(isGameOver) {
    return <h2>GAME OVER</h2>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!currentQuestion || !answersMap) {
    return <div>Question not loaded</div>;
  }

  return (
    <div className="question">
      <h2>{currentQuestion.question}</h2>
      <div className="possible-answers">
        {currentQuestion.possibleAnswers.map((possibleAnswer, idx) => {
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
