/* eslint-disable no-eval */
import React, { useState } from "react";

function Calculater() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handler = (ev) => {
    setInput(ev.target.value);
  };
  return (
    <div>
      <center>
        <input type="text" value={input} name="input" onChange={handler} />
        <button onClick={() => setResult(eval(input))}>Result</button>
        <p>Here is the Result : {result}</p>
        <button onClick={() => setInput("") || setResult("")}> Clear</button>
      </center>
    </div>
  );
}
export default Calculater;
