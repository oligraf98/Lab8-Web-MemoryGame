import React, {useState} from 'react';

function Carta({carta}) {
  const [flip, setFlip] = useState(Boolean(carta.turnt));
  const[won, setWon] = useState(Boolean(carta.won));

  if (won){
    return(
      <div
        className={`card flip`}
      >

        <div className = "front">
          <img src = {carta.bck} alt = "" width = "150" height = "150"/>

        </div>
        <div className = "back">

          <img src = {carta.img} alt = {carta.group} width = "150" height = "150"/>
        </div>

      </div>
    );
  }else{


  return(
    <div
      className={`card ${flip ? 'flip':''}`}
      onClick = {() => {setFlip(!flip); carta.turnt = turn(carta.turnt)}}>

      <div className = "front">
        <img src = {carta.bck} alt = "" width = "150" height = "150"/>

      </div>
      <div className = "back">

        <img src = {carta.img} alt = {carta.group} width = "150" height = "150"/>
      </div>

    </div>
  );
  }
}

export default Carta;

function turn(v) {
  if (v == 0){
    return 1;
  }else{
    return 0;
  }
}
