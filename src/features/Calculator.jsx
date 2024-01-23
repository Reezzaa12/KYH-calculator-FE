import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleCalculate = async (operation) => {
    const url = `http://calculatorapi-env.eba-qcxrz5pu.eu-north-1.elasticbeanstalk.com/${operation}?num1=${num1}&num2=${num2}`;

    try {
      const response = await fetch(url);
      const data = await response.text();

      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(null);
    }
  };

  return (
    <div className="calculator-container">
      <label>
        Tal 1:
        <input type="text" value={num1} onChange={handleNum1Change} className="input-field" />
      </label>
      <br />
      <label>
        Tal 2:
        <input type="text" value={num2} onChange={handleNum2Change} className="input-field" />
      </label>
      <br />
      <div className="button-container">
        <button onClick={() => handleCalculate('add')} className="operation-button">
          +
        </button>
        <button onClick={() => handleCalculate('subtract')} className="operation-button">
          -
        </button>
      </div>
      <br />
      {result !== null ? <div>{result}</div> : <div></div>}
    </div>
  );
};

export default Calculator;