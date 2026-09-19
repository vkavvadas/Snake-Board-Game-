
export default function Dice ({onRoll, result, diceDisabled}){
    
    return (
        <div className="dice">
            <button onClick={onRoll} disabled={diceDisabled}>Roll
            </button>
            {result && <p>{result}</p>}

        </div>
    );
}