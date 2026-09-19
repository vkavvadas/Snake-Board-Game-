export default function Players ({player}){


    return (
        <div className="playerInput" style={{
            backgroundColor: player.id === 1 ?"blue":"yellow"}}>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
            <button>Save</button>
        </div >

        
    );
}