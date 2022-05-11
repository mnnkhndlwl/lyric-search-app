import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'flex',justifyContent:'center',alignItems:'center' }}
      />
    </div>
  );
};

export default Spinner;