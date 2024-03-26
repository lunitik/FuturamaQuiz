import { useContext } from 'react';
import './Score.scss';
import { GameContext } from '../../context/GameContext';

const Score = () => {
    const { score } = useContext(GameContext);

  return (
    <div className='score__container'>
        <h3>Score</h3>
        <p>{score}</p>    
    </div>
  )
}

export default Score