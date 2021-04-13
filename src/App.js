import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1>Increase Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      <Counter />
    </div>
  );
}

export default App;
