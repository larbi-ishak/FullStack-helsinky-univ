import { useState } from "react";

function StaticLine(props) {
  return (
    <p>
      {props.text} {props.value} {props.text === "positive" ? "%" : ""}
    </p>
  );
}
function Statistics(props) {
  return (
    <>
      <h2>statistics</h2>

      <StaticLine text="good" value={props.good} />
      <StaticLine text="neutral" value={props.neutral} />
      <StaticLine text="bad" value={props.bad} />
      <StaticLine text="average" value={props.average} />
      <StaticLine text="positive" value={props.postive} />
    </>
  );
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.text}</button>;
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const average = (good - bad) / (good + neutral + bad) || 0;
  const postive = good / (good + neutral + bad) || 0;

  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          average={average}
          postive={postive}
        />
      )}
    </>
  );
}

export default App;
