import { useState } from "react";

function StaticLine(props) {
  return (
    <p>
      <th>{props.text}</th>
      <td>
        {props.value} {props.text === "positive" ? "%" : ""}{" "}
      </td>
    </p>
  );
}
function Statistics(props) {
  return (
    <>
      <h2>statistics</h2>
      <table>
        <StaticLine text="good" value={props.good} />
        <StaticLine text="neutral" value={props.neutral} />
        <StaticLine text="bad" value={props.bad} />
        <StaticLine text="average" value={props.average} />
        <StaticLine text="positive" value={props.postive} />
      </table>
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

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

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

      <div>{anecdotes[selected]}</div>
      <button onClick={() => setSelected(selected + 1)}>next anecdote</button>
    </>
  );
}

export default App;
