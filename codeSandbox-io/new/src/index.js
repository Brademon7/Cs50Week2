import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0,
    }
  }

  increaseCount(){
    this.setState({count: this.state.count + 1});
  }

  render(){
    return(
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>{this.state.count}</h2>
        <div>
        <button onClick={() => this.increaseCount()}>Incease</button>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");

let count = 0;
ReactDOM.render(<App count={count++} />, rootElement);

