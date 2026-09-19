
export default function Dice ({onRoll, result, diceDisabled}){
    
    return (
        <div className="dice">
            <button onClick={onRoll} disabled={diceDisabled}>Roll
            </button>
            <span>{result && <p>{result}</p>}</span>

        </div>
    );
}