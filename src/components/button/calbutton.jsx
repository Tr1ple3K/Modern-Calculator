// CalButton.js

import React from 'react';

function CalButton ({ buttonText, spanningRow, spanningCol, btColor, onClick, operator }){
  const buttonStyle = {
    gridColumn: spanningCol,
    gridRow: spanningRow,
    backgroundColor: btColor,
  };

  return (
    <button style={buttonStyle}  onClick={() => onClick(buttonText)}>
      {buttonText}
    </button>
  );
};

export default CalButton;
