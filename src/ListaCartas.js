import React from 'react';
import Carta from './Carta.js';

function ListaCartas ({cartas}){
  //setDown(cartas);
  return(
    <div className = "grid-cartas">
      {cartas.map(carta => {
        return <Carta carta = {carta} key={carta.id} />
      })}
    </div>
  );

}



export default ListaCartas;

function checkDoubles (cartas){
  var groups = [];
  var c = 0;
  for (var i in cartas){
    if(i.turnt === 1){
      groups.push(i.group);
      c += 1;
    }

    if(c > 1){
      if( groups[0] === groups[1]){
        const groups = [];
        return [true, groups[0]];
      }else{
        const groups = [];
        return [true, 0];
      }
    }

  }
  groups = [];
  return [false, 0];
}

function setDown (cartas){
  const checkdbls = checkDoubles(cartas);
  if(checkdbls[0]){

    for (var carta in cartas){
      if(carta.group === checkdbls[1]){
        carta.won = 1;

      }else{
        carta.turnt = 0;
      }
    }
  }
  return cartas;
}
