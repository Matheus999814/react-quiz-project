import { useContext } from "react";
import { QuizContext } from "../context/quizcontext";

import "./Welcome.css"


const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
        <h2 className="welcome-h2">Bem vindo ao quiz</h2>
        <p>Clique no botão abaixo para começar</p>
        <button className="btn-start" onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        
    </div>
  )
}

export default Welcome