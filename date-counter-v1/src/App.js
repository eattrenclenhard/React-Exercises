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
        <span>
          <button onClick={() => setStep((s) => s - 1)}>&minus;</button>
        </span>
        Step: {step}
        <span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={() => setCount((c) => c - step)}>&minus;</button>
        </span>
        Count: {count}
        <span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </span>
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
    </>
  );
}
