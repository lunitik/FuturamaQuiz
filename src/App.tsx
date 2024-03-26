import "./App.css";
import NextQuestionButton from "./components/NextQuestionButton/NextQuestionButton";
import Question from "./components/Question/Question";
import Score from "./components/Score/Score";
import GameContextProvider from "./context/GameContextProvider";

function App() {
  return (
    <section>
      <h1>Futurama Quiz</h1>
      <h6>questions supplied by sampleapis.com</h6>
      <GameContextProvider>
        <Score />
        <Question />
        <NextQuestionButton />
      </GameContextProvider>
    </section>
  );
}

export default App;
