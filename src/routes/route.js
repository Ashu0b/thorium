const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemeController= require("../controllers/memeController")
const WeatherController= require("../controllers/weatherController")







router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistrictsById", CowinController.getDistricts)


router.get('/getMemes', MemeController.getMemes )
router.post('/createMemes', MemeController.createMemes)


router.get('/getWeather', WeatherController.getWeather)
router.get('/tempOfLondon', WeatherController.tempOfLondon)
router.get('/tempOfCities', WeatherController.tempOfCities)



module.exports = router;