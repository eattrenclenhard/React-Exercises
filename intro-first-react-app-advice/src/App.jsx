import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}
function Message({ count }) {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}

Message.propTypes = {
  count: PropTypes.number,
  // count: PropTypes.number.isRequired,
};
