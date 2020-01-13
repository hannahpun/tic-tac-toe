import React from 'react';
import { IoMdClose, IoMdRadioButtonOff } from 'react-icons/io';

function Square({value, handleClick}) {
  let squareVal = null;
  if(value === 'o') squareVal = <IoMdRadioButtonOff/>
  if(value === 'x') squareVal =  <IoMdClose/>
  return (
    <button 
      className="square" 
      onClick={handleClick}
    >
      {squareVal}
    </button>
  );
}

export default Square;
