
export default function Gameboard ({positions, currentPos ,player}){





  let gameFinished = currentPos >= positions.length-1;
  console.log (positions.length);
    
    const playerPosition = positions.find((position)=>{
        return player.position === position.number;
    })


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
            {!gameFinished && <div 
            className="pawn"
            style={{
                left:playerPosition.x +30,
                top:playerPosition.y+5
            }}
            >
            {player.name}
            </div>}
            {gameFinished && <p> {player.name} Wins!!</p>}
        </div>
    );
}