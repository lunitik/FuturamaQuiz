import './NextQuestionButtonl.scss';
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const NextQuestionButton = () => {
  const { handleNextQuestion, isGameOver, answerHasBeenSelected } = useContext(GameContext);

  if (isGameOver) {
    return <></>;
  }

  return (
    <div className="game-controls__container">
      <button
        className="game-controlles__button"
        disabled={isGameOver || !answerHasBeenSelected}
        onClick={handleNextQuestion}
      >
        Next
      </button>
    </div>
  );
};

export default NextQuestionButton;
