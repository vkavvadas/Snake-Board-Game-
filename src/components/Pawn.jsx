export default function Pawn({player , positions}){

    const currentPosition = positions.find(position=>player.position===position.number);

    return <div 
        className="pawn"
        style={{
            left:player.id===1&&player?currentPosition.x +10:currentPosition.x +50,
            top:currentPosition.y+5,
            backgroundColor:player.id===1?"#3f5f56":"#5f4b3a"
        }}
        >
        {player.name} 
    </div>  
}