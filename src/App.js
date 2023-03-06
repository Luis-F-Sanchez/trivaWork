import React, { useState } from "react";
import "./App.css";
import Question from "./components/quest.js";
import NextQuestion from "./components/nextQ.js";

function App(currentQuestionNumber) {
  let [questNum, setQuestNum] = useState(0);
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question question={questNum} />
      <NextQuestion questNum={questNum} setQuestNum={setQuestNum} />
    </div>
  );
}

export default App;
