import React from 'react'
import "./Nivel.css";
import { useContext } from 'react';
import { QuizContext } from '../context/quizcontext';


const Nivel = () => {
  const [quizState, dispatch] = useContext(QuizContext);


const chooseNivel = (category) => {
  dispatch({type: "START_GAME", payload: category})

  dispatch({type: "REORDER_STATE"})
}




  return (
    <div>
      <h2 className='nivel-h2'>Selecione o Nivel do Quiz abaixo:</h2>
        <div className='nivel-container'>
          {quizState.questions.map((question) => (
            <button className='nivel-btn' key={question.category} onClick={() => chooseNivel(question.category)}>{question.category}</button>
          ))}
      
        </div>
    </div>
  )
}

export default Nivel