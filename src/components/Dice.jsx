import dice1 from '../assets/dices(1).png';
import dice2 from '../assets/dices(2).png';
import dice3 from '../assets/dices(3).png';
import dice4 from '../assets/dices(4).png';
import dice5 from '../assets/dices(5).png';
import dice6 from '../assets/dices(6).png';

const diceImgs =[
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
];


export default function Dice ({onRoll, result, diceDisabled}){

    
    return (
        <div className="dice">
            <button onClick={onRoll} disabled={diceDisabled}>Roll</button>
            {result[0] && <img className="dices" src={diceImgs[result[0]-1]} alt=""  />}
            {result[0] && <img className="dices" src={diceImgs[result[1]-1]} alt=""  />}
        </div>
    );
}