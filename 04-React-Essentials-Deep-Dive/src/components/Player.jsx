import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName}){
    const [ playerName, setPlayerName ] = useState(name);
    const [ isEditable, setIsEditable ] = useState(false);

    function handleIsEditableButton(){
        setIsEditable((isEditable) => !isEditable);

        if(isEditable){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editableName = <span className="player-name">{playerName}</span>;

    if(isEditable)
        editableName = <input type="text" required value={playerName} onChange={handleChange}/>;
    return (
        <li className={isActive ? 'active' : undefined}>
            <span>
                { editableName }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEditableButton}>{isEditable ? 'Save' : 'Edit' }</button>
          </li>
    );
}