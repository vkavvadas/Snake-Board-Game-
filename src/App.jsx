import {useState} from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Players from './components/Players.jsx';
import Logs from './components/Logs.jsx';
import Dice from './components/Dice.jsx';
import Gameboard from './components/Gameboard.jsx';

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

  
  
  function rollDice(){
    return Math.floor(Math.random()*6+1);
  }
  function handleRoll(){
    const result = /*rollDice()+*/rollDice();
    setRollResult(result);
    setPlayers(prevPlayer=>{
      return prevPlayer.map(player=>{
        return ( player.active ?
          {
          ...player,
          position:player.position+result,
          active:!player.active
        }
        :
        {
          ...player,
          active:!player.active
        }
      );
      });
    });
  }


  console.log(players);
  return (
    <>
    <Header />
    <main>
      <div className="playerMenu">
        <Players player={players[0]}/>
        <Players player={players[1]}/>
        <Dice onRoll={handleRoll} result={rollResult}/>
      </div>
      
      <Gameboard positions={positions} players={players}/>

      <Logs />
    </main>
    <Footer />
    </>
  );
}

export default App
