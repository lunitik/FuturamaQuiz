import "./App.css";
import GameControls from "./components/GameControls/GameControls";
import Question from "./components/Question/Question";
import Score from "./components/Score/Score";
import GameContextProvider from "./context/GameContextProvider";

function App() {
  return (
    <section>
      <h1 className="futurama">FUTURAMA</h1>
      <h2 className="futurama subtitle">Quiz</h2>
      <h6>questions supplied by sampleapis.com</h6>
      <GameContextProvider>
        <Score />
        <Question />
        <GameControls />
      </GameContextProvider>
    </section>
  );
}

export default App;
