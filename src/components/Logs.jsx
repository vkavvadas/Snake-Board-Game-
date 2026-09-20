export default function Logs ({logs,player}){
       const winnerlog = logs.find(log=>log.winner);
   
    return (
        <div id="logs">
            <div id="history">
                
                {logs?[...logs].reverse().map((log,index )=>(index<6 && <p key={index}>{log.name} rolled {log.roll} and moved: {log.initPos} → {log.nextPos}</p>)):""}
            </div>
            <div id="turn">
                {winnerlog && <p>{winnerlog.name} have won the game !</p>}
                {!winnerlog && <p>Η σειρα του {player[0].active?player[0].name:player[1].name}</p>}
            </div>
        
        </div>
    );
}