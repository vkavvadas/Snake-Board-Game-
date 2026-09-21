import blueImg from '../assets/bluePawn.png';

export default function Pawn({player , positions}){

    const currentPosition = positions.find(position=>player.position===position.number);

    return <>
    <p>{player.name} </p>
    <div 
        className="pawn"
        style={{
            left:player.id===1&&player?currentPosition.x +5:currentPosition.x +25,
            top:currentPosition.y+5,
            backgroundColor:player.id===1?"#3f5f56":"#5f4b3a",
            
        }}
        >
    </div>  
    </>
}