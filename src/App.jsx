import {useState} from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Players from './components/Players.jsx';
import Logs from './components/Logs.jsx';
import Dice from './components/Dice.jsx';
import Gameboard from './components/Gameboard.jsx';

const positions = [
  { number: 0,  x: 60,  y: 60 },
  { number: 1,  x: 140, y: 50 },
  { number: 2,  x: 220, y: 60 },
  { number: 3,  x: 300, y: 70 },
  { number: 4,  x: 380, y: 80 },
  { number: 5,  x: 460, y: 70 },
  { number: 6,  x: 540, y: 60 },
  { number: 7,  x: 620, y: 70 },
  { number: 8,  x: 650, y: 80 },
  { number: 9,  x: 680, y: 130 },

  { number: 10, x: 680, y: 190 },
  { number: 11, x: 650, y: 220 },
  { number: 12, x: 620, y: 240 },
  { number: 13, x: 540, y: 220 },
  { number: 14, x: 460, y: 190 },
  { number: 15, x: 380, y: 170 },
  { number: 16, x: 300, y: 160 },
  { number: 17, x: 220, y: 170 },
  { number: 18, x: 140, y: 200 },
  { number: 19, x: 60,  y: 240 },

  { number: 20, x: 70,  y: 270 },
  { number: 21, x: 120, y: 300 },
  { number: 22, x: 180, y: 320 },
  { number: 23, x: 240, y: 340 },
  { number: 24, x: 300, y: 320 },
  { number: 25, x: 360, y: 300 },
  { number: 26, x: 430, y: 320 },
  { number: 27, x: 500, y: 310 },
  { number: 28, x: 580, y: 300 },
  { number: 29, x: 650, y: 320 },

  { number: 30, x: 680, y: 350 },
  { number: 31, x: 670, y: 380 },
  { number: 32, x: 620, y: 410 },
  { number: 33, x: 540, y: 420 },
  { number: 34, x: 460, y: 410 },
  { number: 35, x: 380, y: 420 },
  { number: 36, x: 300, y: 430 },
  { number: 37, x: 220, y: 420 },
  { number: 38, x: 140, y: 410 },
  { number: 39, x: 60,  y: 400 },

  { number: 40, x: 50,  y: 440 },
  { number: 41, x: 100, y: 480 },
  { number: 42, x: 180, y: 500 },
  { number: 43, x: 240, y: 510 },
  { number: 44, x: 300, y: 520 },
  { number: 45, x: 360, y: 530 },
  { number: 46, x: 420, y: 520 },
  { number: 47, x: 480, y: 510 },
  { number: 48, x: 540, y: 500 },
  { number: 49, x: 600, y: 490 }
];



function App() {
  
  const [rollResult, setRollResult] = useState();
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

  const [diceDisabled, setDiceDisabled] = useState(false);
  
  function rollDice(){
    return Math.floor(Math.random()*6+1);
  }

  function handleRoll() {
  const result = rollDice() + rollDice();
  setRollResult(result);

  setPlayers(prevPlayers => {

    const updatedPlayers = prevPlayers.map(player => {
      return (
        player.active
          ? {
              ...player,
              position:
                player.position + result > 49
                  ? 49
                  : player.position + result,
              active: !player.active
            }
          : {
              ...player,
              active: !player.active
            }
      );
    });

    const winner = updatedPlayers.find(
      player => player.position === 49
    );

    if (winner) {
      setDiceDisabled(true);
    }

    return updatedPlayers;
  });
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

      <Logs />
    </main>
    <Footer />
    </>
  );
}

export default App
