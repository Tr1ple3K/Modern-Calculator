// CalButton.js

import React from 'react';

function CalButton ({ buttonText, spanningRow, spanningCol, btColor }){
  const buttonStyle = {
    gridColumn: spanningCol,
    gridRow: spanningRow,
    backgroundColor: btColor,
  };

  return (
    <button style={buttonStyle}>
      {buttonText}
    </button>
  );
};

export default CalButton;
