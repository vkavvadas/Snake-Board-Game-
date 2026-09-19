export default function Pawn({player , positions}){

    const currentPosition = positions.find(position=>player.position===position.number);

    return <div 
        className="pawn"
        style={{
            left:currentPosition.x +30,
            top:currentPosition.y+5,
            backgroundColor:player.id===1?"blue":"yellow"
        }}
        >
        {player.name} 
    </div>  
}