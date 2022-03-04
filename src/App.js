import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: "",
    operador: ""
  };

  handleChange = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChangetwo = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  sum = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 + n2,
        operador: "+"
      });
    }
  };
  sub = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 - n2
    });
  };
  divi = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 / n2
    });
  };
  mult = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 * n2
    });
  };
  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: "",
      operador: ""
    });
  };

  render() {
    let { result, n1, n2, operador } = this.state;
    let { sum, sub, divi, mult, clear } = this;
    return (
      <div className="container">
        <h1>Calculadora</h1>
        <input onChange={this.handleChange} type="number" value={n1} />
        <h2>{operador}</h2>
        <div className="box-button">
          <button className="botão" onClick={sum}>
            +
          </button>
          <button className="botão" onClick={sub}>
            -
          </button>
          <button className="botão" onClick={divi}>
            /
          </button>
          <button className="botão" onClick={mult}>
            *
          </button>
          <button className="botão" onClick={clear}>
            C
          </button>
        </div>
        <input onChange={this.handleChangetwo} type="number" value={n2} />
        <h2>Resultado</h2>
        <h2>{result}</h2>
      </div>
    );
  }
}

export default App;
