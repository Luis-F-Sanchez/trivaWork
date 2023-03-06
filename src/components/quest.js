import data from "../sample_data.json";

function Question(props) {
  return (
    <div>
      <h1>{data[props.question].question.text}</h1>
    </div>
  );
}

export default Question;
