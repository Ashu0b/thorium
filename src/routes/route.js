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
  
   router.post('/players/:playerName/bookings/:bookingId',function(req,res){
let name =req.params.playerName
let isPlayerPresent = false
for(let i=0;i<players.length;i++){
  if(players[i].name==name) {
    isPlayerPresent = true
  }
}
if (isPlayerPresent){
  res.send('Player not present')
}
res.send('player is present')
});