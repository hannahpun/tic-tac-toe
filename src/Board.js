import React from 'react';
import Square from './Square'

function Board({player, data, handleClick}) {

  const renderSquare = (i) => {
    return ( 
      <Square 
        value={data[i]} 
        handleClick={() => handleClick(i)} 
        index={i}
      />
    );
  }
  
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
