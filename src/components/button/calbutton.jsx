// CalButton.js

import React from 'react';
import { motion } from "framer-motion"

function CalButton({ buttonText, spanningRow, spanningCol, btColor, onClick, txtColor}) {
  const buttonStyle = {
    gridColumn: spanningCol,
    gridRow: spanningRow,
    backgroundColor: btColor,
    color: txtColor,
  };

  return (
    <motion.button style={buttonStyle} onClick={() => onClick(buttonText)}  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
      {buttonText}
    </motion.button>
  );
};

export default CalButton;
