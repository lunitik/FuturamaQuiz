import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question';
import useQuestions from './services/useQuestions';
import { TPossibleAnswersMap } from './components/TPossibleAnswersMap';
import { TQuestion } from './components/TQuestion';
import { AnswerResult } from './components/AnswerResult';

const NUMBER_OF_QUESTIONS_IN_QUIZ = 5;
  

function App() {
  const {error, questions, isPending} = useQuestions(NUMBER_OF_QUESTIONS_IN_QUIZ);
  const [currentQuestion, setCurrentQuestion] = useState<TQuestion>();
  const [answersMap, setAnswersMap] = useState<TPossibleAnswersMap>();

  useEffect(() => {
    console.log("questions effect")
    if (!questions) return;
    
    setCurrentQuestion(questions[0]);
  }, [questions]);
  
  useEffect(() => {
    console.log("currentQuestion effect")
    if (!currentQuestion) return;

    const answers: TPossibleAnswersMap = {};
    currentQuestion.possibleAnswers.map((possibleAnswer) => {
          answers[possibleAnswer] = AnswerResult.Default;
          return;
      });
      setAnswersMap(answers);
  }, [currentQuestion]);

  return (
    <section>
      <h1>Futurama Quiz</h1>
      <h6>questions supplied by sampleapis.com</h6>
      {isPending && <div>Loading...</div>}
      {error && <p>{error}</p>}
      {currentQuestion &&
       answersMap &&
       <Question question={currentQuestion} answersMap={answersMap} setAnswersMap={setAnswersMap} />}
    </section>
  )
}

export default App
