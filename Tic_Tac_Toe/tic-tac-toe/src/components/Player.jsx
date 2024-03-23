import { useState } from "react";
export default function Player({ name, symbol, isActive, handlePlayer }) {

    const [isEditing, setIsEditing] = useState(false);
    // const [changeName, setChangeName] = useState(name);

    function onSelect() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        handlePlayer(event.target.value);
    }

    // let playerName = <span className="player-name">{name}</span>;

    // if(isEditing === true)
    // {
    //     playerName = <input type="text"></input>
    // }


    return (
        <li className={isActive ? "active": undefined}>
            <span className="player">

                {isEditing ? <input type="text" value={name} onChange={handleChange} /> :
                    <span className="player-name">{name}</span>}

                <span className="player-symbol">
                    {symbol}
                </span>
            </span>
            <button onClick={onSelect}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}