import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';

function Log() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];

  return (

    <div className='log-container'>
        <div className='log-style'>
        <ScrollableFeed>
            {items.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid black', padding: '8px'}}>
                {item}
            </div>
            ))}
        </ScrollableFeed>
        </div>
    </div>
  );
}

export default Log;
