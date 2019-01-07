import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { calculation: "", answer: "0" };
    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
    this.undo = this.undo.bind(this);
  }
  handleClick(value) {
    this.setState(state => {
      if (
        state.answer.search(/\+$|\/$|\*$|\-$/) !== -1 &&
        value.search(/\+$|\/$|\*$|\-$/) !== -1
      ) {
        return;
      }
      // if (state.answer[state.answer.length - 1].match(/[^ 0 - 9]/)){return};
      let answer = state.answer == 0 ? value : state.answer + "" + value;
      return { answer: answer };
    });
  }
  calculate() {
    this.setState(prevState => {
      const calculation = prevState.answer;
      const answer = eval(prevState.answer).toString();
      return { calculation, answer };
    });
  }
  undo() {
    this.setState(prevState => {
      if (prevState.answer.length == 1) {
        return { answer: "0" };
      }
      const answer = prevState.answer.substring(0, prevState.answer.length - 1);
      return { answer };
    });
  }
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="screen">
            <p>{this.state.calculation}</p>
            <p>{this.state.answer}</p>
          </div>
          <div className="keys">
            <button
              className="key decimal"
              onClick={() => this.handleClick(".")}
            >
              .
            </button>
            <button className="key times" onClick={() => this.handleClick("*")}>
              x
            </button>
            <button className="key plus" onClick={() => this.handleClick("+")}>
              +
            </button>
            <button className="key minus" onClick={() => this.handleClick("-")}>
              -
            </button>
            <button
              className="key divide"
              onClick={() => this.handleClick("/")}
            >
              /
            </button>
            <button className="key back" onClick={this.undo}>
              Back
            </button>
            <button
              className="key c"
              onClick={() => this.setState({ answer: "0", calculation: "" })}
            >
              C
            </button>
            <button className="key nine" onClick={() => this.handleClick("9")}>
              9
            </button>
            <button className="key eight" onClick={() => this.handleClick("8")}>
              8
            </button>
            <button className="key seven" onClick={() => this.handleClick("7")}>
              7
            </button>
            <button className="key six" onClick={() => this.handleClick("6")}>
              6
            </button>
            <button className="key five" onClick={() => this.handleClick("5")}>
              5
            </button>
            <button className="key four" onClick={() => this.handleClick("4")}>
              4
            </button>
            <button className="key three" onClick={() => this.handleClick("3")}>
              3
            </button>
            <button className="key two" onClick={() => this.handleClick("2")}>
              2
            </button>
            <button className="key one" onClick={() => this.handleClick("1")}>
              1
            </button>
            <button className="key zero" onClick={() => this.handleClick("0")}>
              0
            </button>

            <button
              className="key equals"
              style={{ backgroundColor: "#F15A2B" }}
              onClick={this.calculate}
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
