const express = require('express');
const router = express.Router();

const movies = [{
    id: 1,
    "name": "The Shining"
   }, {
    id: 2,
    "name": "Incendies"
   }, {
    id: 3,
    "name": "Rang de Basanti"
   }, {
    id: 4,
    "name": "Finding Demo"
   }]
let moviesarr = ["avengers", "spiderman", "dogs purpose", "abcd"]


router.get("/movies", function(req, res){
    res.send(moviesarr)
})

router.get("/movies/:index", function(req, res) {
    let i = req.params.index
    if (i >= moviesarr.length){
        res.send('no moive at index')
    }else{
        res.send(moviesarr[i])
    }
})

router.get("/films", function(req, res){
    res.send(movies)
})

router.get("/films/:filmId", function(req, res){
    let id = parseInt(req.params.filmId)
    console.log
    for (let i of movies){
        if (id === i.id){
            res.send(i)
        }
    }
    res.send("invalid id")
})

module.exports = welcome;