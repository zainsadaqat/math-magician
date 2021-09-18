import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import Output from './Output';

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

// Instead of Button component, put the button here
const Calculator = () => {
  const [calcState, calcSetState] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  return (
    <section className="calculator-container">
      <main className="grid-container">
        <Output />
        <Button className="ac" value="AC" />
        <Button className="add-sub" value="+/-" />
        <Button className="modulus" value="%" />
        <Button className="divide" value="÷" />
        <Button className="seven" value="7" />
        <Button className="eight" value="8" />
        <Button className="nine" value="9" />
        <Button className="cross" value="x" />
        <Button className="four" value="4" />
        <Button className="five" value="5" />
        <Button className="six" value="6" />
        <Button className="minus" value="-" />
        <Button className="one" value="1" />
        <Button className="two" value="2" />
        <Button className="three" value="3" />
        <Button className="add" value="+" />
        <Button className="zero" value="0" />
        <Button className="dot" value="." />
        <Button className="equal" value="=" />
      </main>
    </section>
  );
};

export default Calculator;
