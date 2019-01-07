import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="screen">screen</div>
          <div className="keys">
            <button className="key">1</button>
            <button className="key">2</button>
            <button className="key">3</button>
            <button className="key">4</button>
            <button className="key">5</button>
            <button className="key">6</button>
            <button className="key">7</button>
            <button className="key">8</button>
            <button className="key">9</button>
            <button className="key">0</button>
            <button className="key">.</button>
            <button className="key">x</button>
            <button className="key">+</button>
            <button className="key">-</button>
            <button className="key">/</button>
            <button className="key" style={{ backgroundColor: "#F15A2B" }}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
