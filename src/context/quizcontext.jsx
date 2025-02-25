import { createContext, useReducer, useState } from "react";
import questions from "../data/questions_complete";

export const QuizContext = createContext();

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
    game: STAGES[0],
    questions,
    currentQuestions: 0,
    score: 0,
    answerSelected: false,
    optionToHide: true,
    excludeBtn: false,
   


}

const quizReducer = (state, action) => {


    console.log(state, action);
    switch(action.type) {
        
case "CHANGE_STATE":
            return {
                ...state,
                game: STAGES[1],
            }

            case "START_GAME": 
            let quizQuestions = null;

            state.questions.forEach((question) => {
                if(question.category === action.payload) {
                    quizQuestions = question.questions;
                }
            })

            return {
                ...state,
                questions: quizQuestions,
                game: STAGES[2]
            }

            case "REORDER_STATE": 
            const reorderquestions = state.questions.sort(() => {
              return  Math.random() - 0.5
            })
            return {
                ...state,
                questions: reorderquestions,
            }

            case "CHANGE_QUESTION": 
            const nextQuestion = state.currentQuestions + 1;
            let endGame = false;

            if(!state.questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestions: nextQuestion,
                game: endGame ? STAGES[3] : state.game,
                answerSelected: false,
                excludeBtn: false,
            }

            case "START_STATE":

            return initialState;

            case "CHECK_ANSWER":
             if(state.answerSelected) return state;

               const answer = action.payload.answer;
               const option = action.payload.option;
               let correctAnswer = 0;

               if(answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }
             case "BACK_STATE": 
             return initialState;
             
             case "REMOVE_OPTION": {
                const excludeOption = state.questions[state.currentQuestions];
                
                let repeat = true;
                let optionToHide;
                let excludeBtn = false; 
              
                excludeOption.options.forEach((option) => {
                  if (option !== excludeOption.answer && repeat) {
                    optionToHide = option;
                    repeat = false;
                    excludeBtn = true; 
                  }
                });
              
                return {
                  ...state,
                  optionToHide, 
                  excludeBtn,
                
                };
              }
              
           
          
        
            

             
            default:
                return state
    }
}




export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialState);

return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}