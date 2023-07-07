import React, { useState } from "react";
import "./App.css";

function App() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [resultA, setResultA] = useState([]);
  const [resultB, setResultB] = useState([]);
  const [resultC, setResultC] = useState([]);
  const [resultD, setResultD] = useState([]);

  const handleClick = () => {
    // Split the lists into arrays
    const arrayA = listA.split(",");
    const arrayB = listB.split(",");

    // Find items present only in A
    const itemsOnlyInA = arrayA.filter((item) => !arrayB.includes(item));
    setResultA(itemsOnlyInA);

    // Find items present only in B
    const itemsOnlyInB = arrayB.filter((item) => !arrayA.includes(item));
    setResultB(itemsOnlyInB);

    // Find items present in both A and B
    const itemsInBoth = arrayA.filter((item) => arrayB.includes(item));
    setResultC(itemsInBoth);

    // Find items combining both A and B (unique)
    const uniqueItems = [...new Set([...arrayA, ...arrayB])];
    setResultD(uniqueItems);
  };

  return (
    <div className="container">
      <h1>List Comparison Tool</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="List A"
          value={listA}
          onChange={(e) => setListA(e.target.value)}
        />
        <input
          type="text"
          placeholder="List B"
          value={listB}
          onChange={(e) => setListB(e.target.value)}
        />
        <button onClick={handleClick}>Compute</button>
      </div>
      <div className="results-container">
        <div className="result">
          <h3>Items present only in A:</h3>
          <ul>
            {resultA.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="result">
          <h3>Items present only in B:</h3>
          <ul>
            {resultB.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="result">
          <h3>Items present in both A and B:</h3>
          <ul>
            {resultC.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="result">
          <h3>Items combining both A and B (unique):</h3>
          <ul>
            {resultD.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
