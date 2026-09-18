import { useState } from "react";

export default function Dice (){
    const [result, setResult] = useState();

    function rollDice(){
        return Math.floor(Math.random()*6+1);
    }
    function handleClick(){
       setResult(rollDice()+rollDice());
    }
  ;



    return (
        <div className="dice">
            <button onClick={handleClick}>Roll
            </button>
            {result && <p>{result}</p>}

        </div>
    );
}