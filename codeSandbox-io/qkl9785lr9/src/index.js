import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(prop) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{prop.count}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
let count = 0;
setInterval(() => ReactDOM.render(<App count={count++} />, rootElement), 1000);
