import {useState} from 'react';

export default function Gameboard (){
const [pos,setPos] = useState(0);

    const positions = [
        {number:0, x: 60, y:30},
        {number:1, x: 110, y:50},
        {number:2, x: 220, y:60},
        {number:3, x: 330, y:65},
        {number:4, x: 440, y:80},
        {number:5, x: 550, y:100},
        {number:6, x: 660, y:130},
        {number:7, x: 680, y:150},
        {number:8, x: 700, y:180},
        {number:9, x: 665, y:220},
        {number:10, x: 555, y:240},
        {number:11, x: 440, y:270},
        {number:12, x: 330, y:300},
        {number:13, x: 220, y:300},
        {number:14, x: 160, y:275},
        {number:15, x: 110, y:245},
    ]
    const player = {
        name:"Player 1",
        position:pos
    }

  let gameFinished = pos === positions.length-1;
  console.log (positions.length);
    
    const playerPosition = positions.find((position)=>{
        return player.position === position.number;
    })

    function handleClick(){
        setPos((prevPos)=>prevPos+1);
        console.log(pos);
    }
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
            <div 
            className="pawn"
            style={{
                left:playerPosition.x +30,
                top:playerPosition.y+5
            }}
            >
            {player.name}
            </div>
           {!gameFinished ? 
           <button onClick={handleClick}>
                Move on 
            </button>:<p>Finished</p>}
        </div>
    );
}