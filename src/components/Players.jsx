import { useState } from "react";

export default function Players ({player, handleInputs}){
    const [playerName, setPlayerName] = useState(player.name);

    return (
        <div id="playerInput" 
            style={{
                backgroundColor: player.id === 1 ?"#3f5f56":"#5f4b3a"}
                }
            key={player.id}
            className={player.active ? "active" : undefined }>
            <label htmlFor=""></label>
            <input type="text" value={playerName} onChange={event=>setPlayerName(event.target.value)} />
            <button onClick={()=>handleInputs(playerName,player.id)}>Save</button>
        </div >

        
    );
}