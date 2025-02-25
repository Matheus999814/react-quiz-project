import React from "react";
import { useContext, useState } from "react";
import { QuizContext } from "../context/quizcontext";
import Options from "./Options";
import "./Question.css"

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestions];

console.log(quizState.optionToHide)

  console.log(quizState);

  const onSelect = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="questions">
      <p>
        Pergunta {quizState.currentQuestions + 1} de{" "}
        {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option) => (
        <Options
          option={option}
          key={option}
          answer={currentQuestion.answer}
          selectOption={() => onSelect(option)}
          hide={quizState.optionToHide === option ? "hide" : null}
        />
      ))}
      <div className="btn-container">
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
      {quizState.optionToHide &&  !quizState.answerSelected && !quizState.excludeBtn && (
      <button   onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
        Excluir uma
      </button> )
      
}
      <button onClick={() => dispatch({type: "BACK_STATE"})}>Voltar a Home</button>
      </div>
    </div>
  );
};

export default Question;
