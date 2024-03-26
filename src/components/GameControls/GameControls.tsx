import './GameControls.scss';
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const GameControls = () => {
  const { handleNextQuestion, isGameOver, answerHasBeenSelected, resetGame } = useContext(GameContext);

  return (
    <div className="game-controls__container">
      {isGameOver && (
        <button
        className='game-controlles__button game-controlles__button--reset'
        onClick={resetGame}
        >
          Try Again
        </button>
      )}
      <button
        className="game-controlles__button game-controlles__button--next"
        disabled={isGameOver || !answerHasBeenSelected}
        onClick={handleNextQuestion}
      >
        Next
      </button>
    </div>
  );
};

export default GameControls;
