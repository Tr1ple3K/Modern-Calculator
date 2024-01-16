import React, { useEffect, useState } from 'react'
import CalButton from './components/button/calbutton'
import Screen from './components/numScreen/screen'
import Log from './components/logScreen/log'
import './App.css'

export default function Calculator() {
  
  return (
    <div className='container-calculator'>

      {/* screen section */}
      <Screen />
      
      {/* button section */}
      <div className='container-grid-calculator'>
        <div className="clear-container">
          <CalButton buttonText="C" spanningRow="span 4" btColor="orange"/>
        </div>

        <div className='num-container'>
            <CalButton buttonText="7"/>
            <CalButton buttonText="8"/>
            <CalButton buttonText="9"/>
            <CalButton buttonText="4"/>
            <CalButton buttonText="5"/>
            <CalButton buttonText="6"/>
            <CalButton buttonText="1"/>
            <CalButton buttonText="2"/>
            <CalButton buttonText="3"/>
            <CalButton buttonText="0" spanningCol="span 2"/>
            <CalButton buttonText="."/>
        </div>
      
        <div className='operator-container'>
            <CalButton buttonText="x"/>
            <CalButton buttonText="%"/>
            <CalButton buttonText="-"/>
            <CalButton buttonText="/"/>
            <CalButton buttonText="+" spanningRow="span 2"/>
            <CalButton buttonText="=" spanningRow="span 2"/>
        </div>
      </div>

      {/* log section */}
      <Log />


    </div>

    
    
  )
}

