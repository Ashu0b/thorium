const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const GlobalMiddleware = require('./middleware/globalMiddleware')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use (GlobalMiddleware.globalMiddleware)


mongoose.connect("mongodb+srv://As_357:oJAKh3z4S39UgaUZ@cluster0.k4tlh.mongodb.net/As_357", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
