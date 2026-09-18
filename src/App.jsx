import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Players from './components/Players.jsx';
import Logs from './components/Logs.jsx';
import Dice from './components/Dice.jsx';
import Gameboard from './components/Gameboard.jsx';

function App() {

  return (
    <>
    <Header/>
    <Players></Players>
    <Dice></Dice>
    <Gameboard></Gameboard> 
    <Logs></Logs>
    <Footer></Footer>
    </>
  );
}

export default App
