import React, {useState} from 'react';
import ListaCartas from "./ListaCartas.js";
import './memoria.css'

function Memory(){
  shuffle(CARTAS)
  const [cartas, setCartas] = useState(CARTAS)
  return(
    <ListaCartas cartas = {cartas} />
  );

}

const CARTAS = [
  {
    id: 1,
    group: 1,
    turnt: 0,
    won: 0,
    img: "https://pyxis.nymag.com/v1/imgs/fc6/8be/c6218ace5f1294933fe51e924a250fa9df-gossip-whale.rsquare.w700.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 2,
    group: 1,
    turnt: 0,
    won: 0,
    img: "https://pyxis.nymag.com/v1/imgs/fc6/8be/c6218ace5f1294933fe51e924a250fa9df-gossip-whale.rsquare.w700.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 3,
    group: 2,
    turnt: 0,
    won: 0,
    img: "https://www.obxtoday.com/wp-content/uploads/2022/02/IMG_8770-square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 4,
    group: 2,
    turnt: 0,
    won: 0,
    img: "https://www.obxtoday.com/wp-content/uploads/2022/02/IMG_8770-square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 5,
    group: 3,
    turnt: 0,
    won: 0,
    img: "https://cdn.theatlantic.com/thumbor/gGsN3oxOp29IpRmdcqaYqsnoX20=/901x0:5026x4125/1080x1080/media/img/mt/2019/04/GettyImages_611541996/original.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 6,
    group: 3,
    turnt: 0,
    won: 0,
    img: "https://cdn.theatlantic.com/thumbor/gGsN3oxOp29IpRmdcqaYqsnoX20=/901x0:5026x4125/1080x1080/media/img/mt/2019/04/GettyImages_611541996/original.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 7,
    group: 4,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/k/b0bd7332-ad60-4798-90a7-1e22240cc37f/green-sea-turtle-coral_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 8,
    group: 4,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/k/b0bd7332-ad60-4798-90a7-1e22240cc37f/green-sea-turtle-coral_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 9,
    group: 5,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/n/1e2a199c-b5c2-4422-b40b-13feea54ce5d/01octopusbooktalk_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 10,
    group: 5,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/n/1e2a199c-b5c2-4422-b40b-13feea54ce5d/01octopusbooktalk_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 11,
    group: 6,
    turnt: 0,
    won: 0,
    img: "https://images.fineartamerica.com/images-medium-large-5/7-jellyfish-square-ulrich-schade.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 12,
    group: 6,
    turnt: 0,
    won: 0,
    img: "https://images.fineartamerica.com/images-medium-large-5/7-jellyfish-square-ulrich-schade.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 13,
    group: 7,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/n/23864564-d137-4566-a170-3144807cc0c9/blue-marlin_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 14,
    group: 7,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/n/23864564-d137-4566-a170-3144807cc0c9/blue-marlin_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 15,
    group: 8,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/n/7d4dee00-a0ac-4582-8b9a-cd72aed610f4/03_orca_killer_whale_gallery_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  },
  {
    id: 16,
    group: 8,
    turnt: 0,
    won: 0,
    img: "https://i.natgeofe.com/n/7d4dee00-a0ac-4582-8b9a-cd72aed610f4/03_orca_killer_whale_gallery_square.jpg",
    bck: "https://cdn.shopify.com/s/files/1/0182/8937/products/The_OTAA_Teal_Blue_Anchor_Fabric_Pocket_Square_M102_800x.jpg?v=1573457171"
  }
]

export default Memory;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
 }
