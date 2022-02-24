const express = require('express');
const router = express.Router();
let players =[];
 
 
   router.post('/players', function (req, res) {
 let player=req.body;
 for(let i= 0; i<players.length;i++){
     if (players[i].name == playerName){
         res.send('player already exists')
     }
 }
 players.push(players);
 console.log("here is the player array", players)
 res.send(players);      
     
   });
  
   


