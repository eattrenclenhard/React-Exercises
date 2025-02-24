import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <br />
        Step: {step}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>&minus;</button>
        <input
          type="text"
          value={count}
          onInput={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <br />
        Count: {count}
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} day(s) ago was `}
        </span>
        {date.toDateString()}
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button
            onClick={function () {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
}
