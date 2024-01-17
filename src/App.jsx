import React, { useEffect, useState, useMemo } from 'react'
import CalButton from './components/button/calbutton'
import Screen from './components/numScreen/screen'
import Log from './components/logScreen/log'
import './App.css'
import _ from 'lodash';

export default function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [equation, setEquation] = useState([]);
  const [result, setResult] = useState([]);
  const [history, setHistory] = useState([]);

  const zipHistory = useMemo(() => _.map(_.zip(equation, result), ([a, b]) => `${a} = ${b}`), [
    equation,
    result,
  ]);

  useEffect(() => {
    setHistory(zipHistory);
  }, [zipHistory]);
  

  function buttonClick(buttonText) {
    // Clear input
    if (buttonText === 'C') {
      setInputValue('');

    } else if (buttonText === '=') {

      const newEquation = [...equation, inputValue.toString()];
      setEquation(newEquation);

      const newResult = [...result, eval(inputValue).toString()];
      setResult(newResult);

      //Result
      setInputValue(eval(inputValue).toString());
     

    } else if (['+', '-', '*', '/', '%'].includes(buttonText) && inputValue === '') {
      setInputValue('');
    } else {
      setInputValue((prevValue) => prevValue + buttonText);
    }
  }
  
  return (
    
    <div className='container-calculator'>
      
      {/* screen section */}
      <Screen value={inputValue}/>
      
      {/* button section */}
      <div className='container-grid-calculator'>
        <div className="clear-container">
          <CalButton buttonText="C" spanningRow="span 4" btColor="orange" onClick={buttonClick}/>
        </div>

        <div className='num-container'>
            <CalButton buttonText="7" onClick={buttonClick}/>
            <CalButton buttonText="8" onClick={buttonClick}/>
            <CalButton buttonText="9" onClick={buttonClick}/>
            <CalButton buttonText="4" onClick={buttonClick}/>
            <CalButton buttonText="5" onClick={buttonClick}/>
            <CalButton buttonText="6" onClick={buttonClick}/>
            <CalButton buttonText="1" onClick={buttonClick}/>
            <CalButton buttonText="2" onClick={buttonClick}/>
            <CalButton buttonText="3" onClick={buttonClick}/>
            <CalButton buttonText="0" spanningCol="span 2" onClick={buttonClick}/>
            <CalButton buttonText="." onClick={buttonClick}/>
        </div>
      
        <div className='operator-container'>
            <CalButton buttonText="*" onClick={buttonClick}/>
            <CalButton buttonText="%" onClick={buttonClick}/>
            <CalButton buttonText="-" onClick={buttonClick}/>
            <CalButton buttonText="/" onClick={buttonClick}/>
            <CalButton buttonText="+" spanningRow="span 2" onClick={buttonClick}/>
            <CalButton buttonText="=" spanningRow="span 2" onClick={buttonClick}/>
        </div>
      </div>

      {/* log section */}
      <Log history={history}/>


    </div>

    
    
  )
}

