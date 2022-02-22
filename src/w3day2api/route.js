const { route } = require("express/lib/application");

route.get('/movies',function(req,res){
    res.send('["chor","pushpa","ram","sita","laxman"]')
});
// by index
route.get('/movies/:movieId', function(req,res){
    mov=["chor","pushpa","ram","sita","laxman"]
    let value = req.params.movieId;
    if (value>mov.length-1){
        res.send("doesnt exist")
    }else {
        res.send(mov[value])
    }
})
module.exports = route;