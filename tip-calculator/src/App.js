import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [rawBill, setRawBill] = useState("");
  const [mySatisfactionLevel, setMySatisfactionLevel] = useState(0);
  const [friendSatisfactionLevel, setFriendSatisfactionLevel] = useState(0);

  const tip =
    ((mySatisfactionLevel + friendSatisfactionLevel) / 2 / 100) * rawBill;

  function handleReset() {
    console.log("resetting session");
    setRawBill("");
    setMySatisfactionLevel(0);
    setFriendSatisfactionLevel(0);
  }

  return (
    <div>
      <BillInput rawBill={rawBill} onSetRawBill={setRawBill} />
      <SatisfactionLevel
        satisfactionLevel={mySatisfactionLevel}
        onSatisfactionLevel={setMySatisfactionLevel}
      >
        How did you like the service?
      </SatisfactionLevel>
      <SatisfactionLevel
        satisfactionLevel={friendSatisfactionLevel}
        onSatisfactionLevel={setFriendSatisfactionLevel}
      >
        How did your friend like the service?
      </SatisfactionLevel>
      {rawBill > 0 && (
        <>
          <BillOutput
            rawBill={rawBill}
            // mySatisfactionLevel={mySatisfactionLevel}
            // friendSatisfactionLevel={friendSatisfactionLevel}
            tip={tip}
          />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ rawBill, onSetRawBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="total bill excluding tip"
        value={rawBill}
        onChange={(e) => onSetRawBill(+e.target.value)}
      ></input>
      {/* <p>Bill input is ${rawBill}</p> */}
    </div>
  );
}

function SatisfactionLevel({
  satisfactionLevel,
  onSatisfactionLevel,
  children,
}) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={satisfactionLevel}
        onChange={(e) => onSatisfactionLevel(+e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
      {/* <p>Average Satisfaction Level {satisfactionLevel}%</p> */}
    </div>
  );
}

// function BillOutput({ rawBill, mySatisfactionLevel, friendSatisfactionLevel }) {
function BillOutput({ rawBill, tip }) {
  // if (!rawBill) {
  //   return;
  // }

  // const tip =
  //   ((mySatisfactionLevel + friendSatisfactionLevel) / 2 / 100) * rawBill;
  // const totalPayment = rawBill + tip;

  return (
    <h3>
      {/* <span>
        me: {mySatisfactionLevel}% friend: {friendSatisfactionLevel}%
      </span> */}
      You pay ${rawBill + tip} (${rawBill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    // <button onClick={() => onReset()} title="reset session">
    <button onClick={onReset} title="reset session">
      Reset
    </button>
  );
}
