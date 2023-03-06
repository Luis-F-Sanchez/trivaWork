import data from "../sample_data.json";
import NextQuestion from "./nextQ.js";
import React, { useState } from "react";

function AnswerChoices(props) {
  return (
    <div>
      <NextQuestion choice={data[0].question.choices} />
    </div>
  );
}

export default AnswerChoices;
