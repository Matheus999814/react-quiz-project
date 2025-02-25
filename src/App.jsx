import './App.css'
import Welcome from './components/Welcome'
import Question from './components/Question'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quizcontext'
import EndGame from './components/EndGame'
import Nivel from "./components/Nivel"



function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  

  return (
    
      <div className='App'>
    <h1>Quiz Matemático</h1>
    {quizState.game === "Start" && <Welcome/>}
    {quizState.game === "Category" && <Nivel/>}
    {quizState.game === "Playing" && <Question/>}
    {quizState.game === "End" && <EndGame/>}
    </div>
  )
}

export default App
