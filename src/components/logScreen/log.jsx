import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';


function Log({ history }) {
  return (
    <div className='log-style'>
      <ScrollableFeed>
        {history.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid black', padding: '8px' }}>
            {item}
          </div>
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default Log;
