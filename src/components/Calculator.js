import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator-container">
        <main className="grid-container">
          <section className="result">0</section>
          <section className="ac">AC</section>
          <section className="add-sub">+/-</section>
          <section className="modulus">%</section>
          <section className="divide">÷</section>
          <section className="seven">7</section>
          <section className="eight">8</section>
          <section className="nine">9</section>
          <section className="cross">x</section>
          <section className="four">4</section>
          <section className="five">5</section>
          <section className="six">6</section>
          <section className="minus">-</section>
          <section className="one">1</section>
          <section className="two">2</section>
          <section className="three">3</section>
          <section className="add">+</section>
          <section className="zero">0</section>
          <section className="dot">.</section>
          <section className="equal">=</section>
        </main>
      </section>
    );
  }
}

export default Calculator;
