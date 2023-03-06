import data from "../sample_data.json";
import "../App.css";

function NextQuestion(props) {
  function clickAns(btnIndex) {
    if (btnIndex === getCorrectAnswer()) {
      alert("That's correct");
    } else {
      alert("wrong");
    }
    if (props.questNum < data.length - 1) {
      props.setQuestNum(props.questNum + 1);
    }
  }
  function getCorrectAnswer() {
    return data[props.questNum].question.correct_choice_index;
  }

  return (
    <div>
      <button onClick={() => clickAns(0)}>
        {data[props.questNum].question.choices[0]}
      </button>
      <button onClick={() => clickAns(1)}>
        {data[props.questNum].question.choices[1]}
      </button>
      <button onClick={() => clickAns(2)}>
        {data[props.questNum].question.choices[2]}
      </button>
      <button onClick={() => clickAns(3)}>
        {data[props.questNum].question.choices[3]}
      </button>
    </div>
  );
}
export default NextQuestion;
