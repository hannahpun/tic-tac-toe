import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FaRegCircle, FaTimes } from 'react-icons/fa';

import Board from './Board';
import './App.scss';

function App() {
  const [currentPlayer, setPlayer] = useState('o');

  const [squares, setSquare] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  // [
  //  'o','x', null,
  //  'o','x', null,
  //  'o','x', null
  // ]
  
  const calculateWinner = (squares) => {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i=0; i<lines.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        setWinner(squares[a]); // 'o' or 'x'
      }
    }
    
  }

  const storeSquares = (index) => {
    const cloneSquares = [...squares]

    // if already store
    if(cloneSquares[index] || winner) return;

    cloneSquares[index] = currentPlayer;
    setSquare(cloneSquares)

    const nextPlayer = currentPlayer === 'o' ? 'x' : 'o';
    setPlayer(nextPlayer)

    calculateWinner(cloneSquares)
    
  }
  const status = currentPlayer === 'o' ? <FaRegCircle/> : <FaTimes />;

  const handelReset = () => {
    setPlayer('o');
    setSquare(Array(9).fill(null));
    setWinner(null)
  }

  return (
    <div className="game">
      <div className="game-board">
        <h2 className="title">{ winner ? `Winnir is ${winner}` : `Tic Tac Toe`}</h2>
        { !winner ? <p className="status"><span>Next player: </span>  {status}</p> : null }
        <Board 
          data = {squares}
          handleClick={storeSquares}
          player={currentPlayer}/>
        <div className="game-result">
          <button onClick={handelReset} className='btn'>Restart</button>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  // currentPlayer: PropTypes.number,
  squares: PropTypes.array
};

export default App;
