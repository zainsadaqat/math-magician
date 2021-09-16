import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Output from './Output';
import Button from './Button';

const generateResult = ({ total, next, operation }) => {
  if (!total && !next && !operation) {
    return 0;
  }
  if (!total && next) {
    return `${next}`;
  }
  if (operation && total && !next) {
    return `${total} ${operation}`;
  }
  if (total && next && operation) {
    return `${total} ${operation} ${next}`;
  }
  return `${total}`;
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
  }

  clickEvent = (event) => {
    const obj = this.state;
    console.log(obj);
    const { value } = event.target;
    const resultObject = calculate(obj, value);
    this.setState(resultObject);
  };

  render() {
    const outputVal = generateResult(this.state);
    return (
      <section className="calculator-container">
        <main className="grid-container">
          <Output outputval={outputVal} />
          <Button className="ac" value="AC" clickEvent={this.clickEvent} />
          <Button
            className="add-sub"
            value="+/-"
            clickEvent={this.clickEvent}
          />
          <Button className="modulus" value="%" clickEvent={this.clickEvent} />
          <Button className="divide" value="÷" clickEvent={this.clickEvent} />
          <Button className="seven" value="7" clickEvent={this.clickEvent} />
          <Button className="eight" value="8" clickEvent={this.clickEvent} />
          <Button className="nine" value="9" clickEvent={this.clickEvent} />
          <Button className="cross" value="x" clickEvent={this.clickEvent} />
          <Button className="four" value="4" clickEvent={this.clickEvent} />
          <Button className="five" value="5" clickEvent={this.clickEvent} />
          <Button className="six" value="6" clickEvent={this.clickEvent} />
          <Button className="minus" value="-" clickEvent={this.clickEvent} />
          <Button className="one" value="1" clickEvent={this.clickEvent} />
          <Button className="two" value="2" clickEvent={this.clickEvent} />
          <Button className="three" value="3" clickEvent={this.clickEvent} />
          <Button className="add" value="+" clickEvent={this.clickEvent} />
          <Button className="zero" value="0" clickEvent={this.clickEvent} />
          <Button className="dot" value="." clickEvent={this.clickEvent} />
          <Button className="equal" value="=" clickEvent={this.clickEvent} />
        </main>
      </section>
    );
  }
}

export default Calculator;
