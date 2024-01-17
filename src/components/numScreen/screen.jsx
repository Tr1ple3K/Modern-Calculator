// CalButton.js

import React from 'react';

function Screen ({ value }) {
 
  return (
    <div>
        {/* screen section */}
        <div className='screen-container'>
            <input type="text" value={value} readOnly className="screenStyle"/>
        </div>
    </div>
  );
};

export default Screen;
