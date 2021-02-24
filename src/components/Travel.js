import React from 'react';

function Travel() {
  return (
    <div className='wrapper'>
      <div className='travel__copy'>
        <h2>Some text here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className='travel__img'>
        <img src={Travel} />
      </div>
    </div>
  );
}

export default Travel;
