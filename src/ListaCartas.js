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
  const groups = [];
  const c = 0;
  for (i in cartas){
    if(i.turnt = 1){
      groups.push(i.group);
      c += 1;
    }

    if(c > 1){
      if( groups[0] === groups[1]){
        return [true, groups[0]];
      }else{
        return [true, 0];
      }
    }

  }
  return [false, 0];
}

function setDown (cartas){
  const checkdbls = checkDoubles(cartas);
  if(checkdbls[0]){
    for (carta in cartas){
      if(carta.group === checkdbls[1]){
        carta.won = 1;

      }else{
        i.turnt = 0;
      }
    }
  }
  return cartas;
}
