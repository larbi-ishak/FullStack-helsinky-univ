import { useState } from "react";

function Statistics(props) {
  return (
    <>
      <h2>statistics</h2>

      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>average {props.average}</p>
      <p>positive {props.postive}%</p>
    </>
  );
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        average={average}
        postive={postive}
      />
    </>
  );
}

export default App;
