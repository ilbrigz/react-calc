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
            <button className="key one">1</button>
            <button className="key two">2</button>
            <button className="key three">3</button>
            <button className="key four">4</button>
            <button className="key five">5</button>
            <button className="key six">6</button>
            <button className="key seven">7</button>
            <button className="key eight">8</button>
            <button className="key nine">9</button>
            <button className="key zero">0</button>
            <button className="key decimal">.</button>
            <button className="key times">x</button>
            <button className="key plus">+</button>
            <button className="key minus">-</button>
            <button className="key divide">/</button>
            <button className="key back">Back</button>
            <button className="key c">C</button>
            <button
              className="key equals"
              style={{ backgroundColor: "#F15A2B" }}
            >
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
