
import Pawn from './Pawn.jsx'
import gameImg from '../assets/snakegameboard.png';

export default function Gameboard ({positions ,players}){

    const gameFinished= players.some(player=>player.position===positions.length - 1);
    const gameWinner = players.find(player=>player.position=== positions.length-1 );
    //console.log(gameFinished);
    //console.log(gameWinner);
    return (
        <div id="gameboard">
        {/*<img src={gameImg} alt="Snake Gameboard Image" />*/}
            {positions.map(position => {
                return (            
                    <div 
                    className="square" 
                    key={position.number} 
                    style={{left:`${position.x}px` ,
                            top:`${position.y}px`}}
                    >
                        {position.number}
                    </div>
                );
            })}
            {gameFinished && <p id="winning">Game Finished with winner {gameWinner.name}</p>}
        <Pawn positions={positions} player={players[0]}/> 
        <Pawn positions={positions} player={players[1]}/>   
        
        </div>
    );
}