import React, { useState } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <p>Calculator</p>
      <input type="text" value={input} name="input" onChange={handler} /> <br />
      <button onClick={() => setResult(eval(input))}>Result</button>
      <h4>Result {result}</h4>
    </div>
  );
}

export default Calculator;
