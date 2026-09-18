
export default function Dice ({onRoll,result}){
    
    return (
        <div className="dice">
            <button onClick={onRoll}>Roll
            </button>
            {result && <p>{result}</p>}

        </div>
    );
}