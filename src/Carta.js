import React, {useState} from 'react';

function Carta({carta}) {
  const [flip, setFlip] = useState(false);
  return(
    <div
      className={`card ${flip ? 'flip':''}`}
      onClick = {() => setFlip(!flip)}>

      <div className = "front">
        <img src = {carta.bck} alt = "" width = "150" height = "150"/>

      </div>
      <div className = "back">

        <img src = {carta.img} alt = {carta.group} width = "150" height = "150"/>
      </div>

    </div>
  );
}

export default Carta;
