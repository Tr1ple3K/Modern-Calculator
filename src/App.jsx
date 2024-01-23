import React, { useEffect, useState, useMemo } from 'react'
import CalButton from './components/button/calbutton'
import Screen from './components/numScreen/screen'
import Log from './components/logScreen/log'
import './App.css'
import _ from 'lodash';
import { LinearGradient } from 'react-text-gradients'
import { motion } from "framer-motion"



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
    }  
    else if (buttonText === 'Del') {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    }
    else if (['sin', 'cos', 'tan','sinh','cosh','tanh','√','log'].includes(buttonText) && inputValue === '') {
      setInputValue('');
    }

    else if (buttonText === 'sin') {
      try {
        const sinResult = Math.sin(eval(inputValue)).toString();
        const newEquation = [...equation, 'sin'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, sinResult];
        setResult(newResult);
        setInputValue(sinResult);
      } catch (error) {
        setInputValue('Error');
      }
    }

    else if (buttonText === 'cos') {
      try {
        const cosResult = Math.cos(eval(inputValue)).toString();
        const newEquation = [...equation, 'cos'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, cosResult];
        setResult(newResult);
        setInputValue(cosResult);
      } catch (error) {
        setInputValue('Error');
      }
    }

    else if (buttonText === 'tan') {
      try {
        const tanResult = Math.tan(eval(inputValue)).toString();
        const newEquation = [...equation, 'tan'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, tanResult];
        setResult(newResult);
        setInputValue(tanResult);
      } catch (error) {
        setInputValue('Error');
      }
    }

    else if (buttonText === 'sinh') {
      try {
        const sinhResult = Math.sinh(eval(inputValue)).toString();
        const newEquation = [...equation, 'sinh'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, sinhResult];
        setResult(newResult);
        setInputValue(sinhResult);
      } catch (error) {
        setInputValue('Error');
      }
    }

    else if (buttonText === 'cosh') {
      try {
        const coshResult = Math.cosh(eval(inputValue)).toString();
        const newEquation = [...equation, 'cosh'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, coshResult];
        setResult(newResult);
        setInputValue(coshResult);
      } catch (error) {
        setInputValue('Error');
      }
    }

    else if (buttonText === 'tanh') {
      try {
        const tanhResult = Math.tanh(eval(inputValue)).toString();
        const newEquation = [...equation, 'tanh'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, tanhResult];
        setResult(newResult);
        setInputValue(tanhResult);
      } catch (error) {
        setInputValue('Error');
      }
    }
    else if (buttonText === '√') {
      try {
        const rootResult = Math.sqrt(eval(inputValue)).toString();
        const newEquation = [...equation, '√'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, rootResult];
        setResult(newResult);
        setInputValue(rootResult);
      } catch (error) {
        setInputValue('Error');
      }
    }

    else if (buttonText === 'log') {
      try {
        const logResult = Math.log10(eval(inputValue)).toString();
        const newEquation = [...equation, 'log'+'('+inputValue.toString()+')'];
        setEquation(newEquation);

        const newResult = [...result, logResult];
        setResult(newResult);
        setInputValue(logResult);
      } catch (error) {
        setInputValue('Error');
      }
    }
    
    else if (buttonText === '=') {

      const newEquation = [...equation, inputValue.toString()];
      setEquation(newEquation);

      const newResult = [...result, eval(inputValue).toString()];
      setResult(newResult);

      //Result
      setInputValue(eval(inputValue).toString());

    }
    // 
    else if (['*', '/', '%'].includes(buttonText) && inputValue === '') {
      setInputValue('');
    }
    else if (['+', '-', '%', '.'].includes(buttonText) && inputValue.endsWith(buttonText)) {
      setInputValue('Error');
    }
    else if (['+', '%', '.'].includes(buttonText) && (inputValue.endsWith('/') || inputValue.endsWith('*')
      || inputValue.endsWith('%') || inputValue.endsWith('.'))) {
      setInputValue('Error');
    }
    else if (['-', '%', '.'].includes(buttonText) && (inputValue.endsWith('-') || inputValue.endsWith('/') || inputValue.endsWith('*')
    || inputValue.endsWith('%') || inputValue.endsWith('.') )) {
    setInputValue('Error');
  }
    else if (['*'].includes(buttonText) && (inputValue.endsWith('-') || inputValue.endsWith('/') 
      || inputValue.endsWith('%') || inputValue.endsWith('.') || inputValue.endsWith('+'))) {
      setInputValue('Error');
    } 
    else if (['/'].includes(buttonText) && (inputValue.endsWith('-') || inputValue.endsWith('*')
    || inputValue.endsWith('%') || inputValue.endsWith('.') || inputValue.endsWith('+'))) {
    setInputValue('Error');
  }

    else {
      if (inputValue === 'Error') {
        setInputValue('');
      }
      if (inputValue === '0') {
        setInputValue('');
      }
      setInputValue((prevValue) => prevValue + buttonText);
    }
  }

  function clearHistory() {
    setEquation([]);
    setResult([]);
    setHistory([])
    console.log('Cleared history')
  }

  
  

  

  return (
    
    

    <div>
      
      <motion.h1
        initial={{ x: -1000, scale: 0 }} // Start off-screen to the left
        animate={{ x: 0, rotate: 0, scale: 1 }} // Slide in from the left
        transition={{
          type: "tween",
          stiffness: 160,
          damping: 30,
          duration: 0.85
        }}
        className='headerStyle'      
        >
        <LinearGradient gradient={['to left', '#17acff ,#47f9ac']}>Calculator V1</LinearGradient>

      </motion.h1>
     
      <motion.div className='container-calculator'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween", // Use the tween type for a simple linear transition
          duration: 1.5, // Adjust the duration (in seconds) for a slower fade-in
      }}>
       

        {/* screen section */}
        <Screen value={inputValue} />

        {/* button section */}
        <div className='container-grid-calculator'>
          <div className="clear-container">
            <CalButton buttonText="Del" btColor="#030380" txtColor="#A9F1DC" onClick={buttonClick} />
            <CalButton buttonText="C" spanningRow="span 3" btColor="#030380" onClick={buttonClick} />
          </div>

          <div className='num-container'>
            <CalButton buttonText="7" onClick={buttonClick} />
            <CalButton buttonText="8" onClick={buttonClick} />
            <CalButton buttonText="9" onClick={buttonClick} />
            <CalButton buttonText="4" onClick={buttonClick} />
            <CalButton buttonText="5" onClick={buttonClick} />
            <CalButton buttonText="6" onClick={buttonClick} />
            <CalButton buttonText="1" onClick={buttonClick} />
            <CalButton buttonText="2" onClick={buttonClick} />
            <CalButton buttonText="3" onClick={buttonClick} />
            <CalButton buttonText="0" spanningCol="span 2" onClick={buttonClick} />
            <CalButton buttonText="." onClick={buttonClick} />
          </div>

          <div className="clear-container">
            <CalButton buttonText="(" btColor="#030380" txtColor="#A9F1DC" onClick={buttonClick} />
            <CalButton buttonText=")" btColor="#030380" onClick={buttonClick} />
          </div>

          <div className='operator-container'>
            <CalButton buttonText="*" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380"/>
            <CalButton buttonText="%" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380"/>
            <CalButton buttonText="-" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380"/>
            <CalButton buttonText="/" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380"/>
            <CalButton buttonText="+" spanningRow="span 2" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380"/>
            <CalButton buttonText="=" spanningRow="span 2" btColor="#A9F1DC" onClick={buttonClick} txtColor="#030380"/>
          </div>
          
          <div className="trigonometry-container">
            <CalButton buttonText="sin" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            <CalButton buttonText="sinh" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            <CalButton buttonText="cos" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            <CalButton buttonText="cosh" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            <CalButton buttonText="tan" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            <CalButton buttonText="tanh" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            <CalButton buttonText="√" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            <CalButton buttonText="log" onClick={buttonClick} btColor="#A9F1DC" txtColor="#030380" />
            
          </div>
        </div>

        {/* log section */}
        <Log history={history} />

        <div className="button-container" >
          <motion.button className='clear-button' onClick={clearHistory}   whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
            Clear
          </motion.button>
        </div>
      </motion.div>

    </div>
  )
}