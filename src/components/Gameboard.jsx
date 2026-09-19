
import Pawn from './Pawn.jsx'

export default function Gameboard ({positions ,players}){


    

    return (
        <div id="gameboard">
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
        <Pawn positions={positions} player={players[0]}/> 
        <Pawn positions={positions} player={players[1]}/>   

        </div>
    );
}