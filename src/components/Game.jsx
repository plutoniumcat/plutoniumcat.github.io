import '../styles/game.css';
import Player from './Player';
import Targets from './Targets';
import Score from './Score';

export default function Game() {
    
    return(
        <div className="game-container">
            <Player />
            <Targets />
            <Score />
        </div>
    )
}