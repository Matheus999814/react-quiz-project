import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quizcontext";

import "./Options.css";

const Options = ({ option, answer, selectOption, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? `correct` : ""
      } ${quizState.answerSelected && option !== answer ? `wrong` : ""} ${hide ? "hide" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;
