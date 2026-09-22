import { useState} from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Players from './components/Players.jsx';
import Logs from './components/Logs.jsx';
import Dice from './components/Dice.jsx';
import Gameboard from './components/Gameboard.jsx';

const positions = [
  { number: 0,  x: 52,  y: 112 },
  { number: 1,  x: 110, y: 95 },
  { number: 2,  x: 168, y: 95 },
  { number: 3,  x: 226, y: 107 },
  { number: 4,  x: 284, y: 115 },
  { number: 5,  x: 342, y: 110 },
  { number: 6,  x: 400, y: 98 },
  { number: 7,  x: 458, y: 85 },
  { number: 8,  x: 516, y: 80 },
  { number: 9,  x: 574, y: 85 },

  { number: 10, x: 632, y: 98 },
  { number: 11, x: 680, y: 120 },
  { number: 12, x: 710, y: 160 },
  { number: 13, x: 710, y: 205 },
  { number: 14, x: 670, y: 250 },
  { number: 15, x: 605, y: 265 },
  { number: 16, x: 540, y: 263 },
  { number: 17, x: 475, y: 250 },
  { number: 18, x: 420, y: 237 },
  { number: 19, x: 360, y: 225 },

  { number: 20, x: 302,  y: 210 },
  { number: 21, x: 240, y: 200 },
  { number: 22, x: 185, y: 200 },
  { number: 23, x: 123, y: 210 },
  { number: 24, x: 65, y: 225 },
  { number: 25, x: 32, y: 260 },
  { number: 26, x: 50, y: 305 },
  { number: 27, x: 105, y: 322 },
  { number: 28, x: 165, y: 335 },
  { number: 29, x: 225, y: 345 },

  { number: 30, x: 282, y: 350 },
  { number: 31, x: 345, y: 347 },
  { number: 32, x: 420, y: 350 },
  { number: 33, x: 475, y: 350 },
  { number: 34, x: 540, y: 350 },
  { number: 35, x: 600, y: 365 },
  { number: 36, x: 655, y: 385 },
  { number: 37, x: 700, y: 420 },
  { number: 38, x: 665, y: 465 },
  { number: 39, x: 607,  y: 475 },

  { number: 40, x: 552,  y: 475 },
  { number: 41, x: 495, y: 480 },
  { number: 42, x: 435, y: 490 },
  { number: 43, x: 375, y: 488 },
  { number: 44, x: 315, y: 483 },
  { number: 45, x: 250, y: 470 },
  { number: 46, x: 190, y: 460 },
  { number: 47, x: 135, y: 440 },
  { number: 48, x: 70, y: 430 },
  { number: 49, x: 30, y: 465 }
];

const positionEffects = {
  2: { type:"teleport" },
  3: { type:"reroll" },
  4: { type:"extra-roll" },
  5: { type:"none" },
  6: { type:"forward", value:4 },
  7: { type:"backward", value:4 },
  8: { type:"teleport" },
  9: { type:"extra-roll" },
  10: { type:"reroll" },
  11: { type:"skip-turn" },
  12: { type:"trap" },
  13: { type:"none" },
  14: { type:"forward", value:4 },
  15: { type:"backward", value:4 },
  16: { type:"teleport" },
  17: { type:"extra-roll" },
  18: { type:"reroll" },
  19: { type:"skip-turn" },
  20: { type:"trap" },
  21: { type:"reroll" },
  22: { type:"forward", value:4 },
  23: { type:"backward", value:4 },
  24: { type:"teleport" },
  25: { type:"reroll" },
  26: { type:"forward", value:4 },
  27: { type:"teleport" },
};



function App() {
  
  const [diceDisabled, setDiceDisabled] = useState(false);
  const [rollResult, setRollResult] = useState([]);
  const [players, setPlayers] = useState([
    {
    id:1,
    name:"Player 1",
    position:0,
    active:true
    },
    {
    id:2,
    name:"Player 2",
    position:0,
    active:false
    },
    ]);
  const [logs, setLogs] = useState([]);

  
  function rollDice(){
    return Math.floor(Math.random()*6+1);
  }

  function handleRoll() {
    const tableLength=positions.length-1;
    const results =[rollDice() , rollDice()];
    const resultTotal = results.reduce((result,sum)=>{return result+sum});
    const activePlayer = players.find(player=>player.active===true);
    const newPosition = activePlayer.position+resultTotal>tableLength?tableLength:activePlayer.position+resultTotal;
    const currentlog = {
      name:activePlayer.name,
      roll:results,
      initPos:activePlayer.position,
      nextPos:newPosition,
      winner:newPosition===tableLength
    };
    setRollResult(results);

    
    moveStep(activePlayer.position,newPosition,()=>{
      const effect = positionEffects[newPosition];

      if(effect) {
        if (effect.type==="none")   console.log("Safe Tile");
        else if (effect.type ==="forward") {
          console.log("forward");
          const forwardPosition  = newPosition+effect.value>tableLength ? tableLength:newPosition+effect.value;
          moveStep (newPosition,forwardPosition,()=>{console.log("Forward Movement finished");})
        }
        else if (effect.type ==="backward") {
          console.log("backward");
          const backwardPosition = newPosition - effect.value <0 ?0 :newPosition - effect.value;
          moveStep(newPosition,backwardPosition,()=>{console.log("Backward Movement finished");})
        }
        else if (effect.type ==="teleport") {
          console.log("teleport");
          const teleportPosition = Math.floor(Math.random()*44)+1;
          moveStep(newPosition,teleportPosition,()=>{console.log("Teleport Movement finished");})
        }
        else if (effect.type ==="trap") console.log("trap");
        else if (effect.type ==="reroll") {
          console.log("reroll");
          moveStep(newPosition,activePlayer.position,()=>{console.log("Move back and reroll");})
        }
        else if (effect.type ==="extra-roll") console.log("extra-roll");
        else if (effect.type ==="skip-turn") console.log("skip-turn");
        else {console.log("else");}
      }
  

      setLogs(prevLogs=>[
      ...prevLogs,currentlog
      ])

      if (currentlog.winner) {
        setDiceDisabled(true);
      }
    });


  

    function moveStep (currentPosition,targetPosition,onComplete){
      
        console.log(currentPosition,targetPosition);
        if (currentPosition<targetPosition){
          currentPosition+=1;
          setPlayers((prevPlayers)=> {
            return  prevPlayers.map((player) => {
              return player.active ? 
              {...player,position:currentPosition}:
              player; 
            })
          });
          setTimeout(()=> moveStep(currentPosition,targetPosition,onComplete),250);
        }
        else if (currentPosition>targetPosition){
          currentPosition-=1;
          setPlayers((prevPlayers)=> {
            return  prevPlayers.map((player) => {
              return player.active ? 
              {...player,position:currentPosition}:
              player; 
            })
          });
          setTimeout(()=> moveStep(currentPosition,targetPosition,onComplete),250);
        }
        else {
          onComplete();
        }
    }


  }

  function handleChange(name,id){
      setPlayers(players.map(player=>{
        return player.id===id 
        ?         
        {
        ...player,
        name:name
        }
        :
          player
        ;
      }));
  }


  return (
    <>
    <Header />
    <main>
      <div className="playerMenu">
        <Players player={players[0]} handleInputs={handleChange}/>
        <Players player={players[1]} handleInputs={handleChange}/>
        {<Dice onRoll={handleRoll} result={rollResult} diceDisabled={diceDisabled}/>}
      </div>
      
      <Gameboard positions={positions} players={players}/>

      <Logs logs={logs} player={players}/>
    </main>
    <Footer />
    </>
  );
}

export default App
