import React from "react";
import "./App.css";
import rates from "./money";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const rate = rates.USD;

  const handleValueChange = (event) => {
    setValue2(0);
    const value = event.target.value;
    setValue(value);
    setValue2(value * rate);
  };

  const handleValue2Change = (event) => {
    const value = event.target.value;
    setValue(0);
    setValue2(value);
    setValue(value / rate);
  };

  return (
    <div className="App">
      <div>
        <h1>💵 EUR to USD 💵</h1>
        <div>
          <input type="text" value={value} onChange={handleValueChange} />
          <label>€</label>
        </div>
        <div>
          <input type="text" value={value2} onChange={handleValue2Change} />
          <label>$</label>
        </div>
      </div>
    </div>
  );
}

export default App;
