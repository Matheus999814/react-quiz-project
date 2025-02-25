import React from 'react'
import { useContext } from "react";
import { QuizContext } from "../context/quizcontext";
import "./EndGame.css"


const End = () => {
 const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
        <h2>Fim do quiz</h2>
        <p>Sua pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
        <button className="end-btn" onClick={() => dispatch({type: "START_STATE"})}>Voltar</button>
    </div>
  )
}

export default End