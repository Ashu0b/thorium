const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi ")
})


router.get("/test-api" , function(req, res) {
    res.send("hiFunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

const player =
[ 
    {
  "name": "manish",
  "dob": "1/1/1995",
  "gender": "male",
  "city": "jalandhar",
  "sports": ["swimming"],
  "bookings": 
        [
            {

                "bookingNumber": 1,
                "sportId"  : "cricket1234x1",
                "centerId" : "3333",
                "type": "private",
                "slot": "16286598000000",
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021',
            },
            {
                "bookingNumber": 2,
                "sportId": "swiming1234x1",
                "centerId" : "344334",
                "type": "private",
                "slot": '16286518000000',
                "bookedOn": '31/08/2001',
                "bookedFor": '01/09/2001'
            },
        ]

    },



    {

  "name": "gopal",
  "dob": "1/23/1995",
  "gender": "male",
  "city": "pune",
  "sports": ["swimming","footbal"],
  "bookings": 
        [
            {

                "bookingNumber": 1,
                "sportId"  : "cricket1234x1",
                "centerId" : "3333",
                "type": "private",
                "slot": "16286598000000",
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021',
            }
        ]
    }

]


router.post("/players", function(req, res){
    const playerInfo = {}
    let name = req.body.name.toLowerCase()
    let dob = req.body.dob
    let gender = req.body.gender
    let city = req.body.city
    let sports = req.body.sports
    const bookings = []
    playerInfo.name = name
    playerInfo.dob = dob
    playerInfo.gender = gender
    playerInfo.city = city
    playerInfo.sports = sports
    playerInfo.booking = bookings
    let flag = 0
    for (let i = 0; i < player.length; i++){
        if (player[i].name == name){
            res.send({player: name, exist: true, solution: "Enter different name"})
            flag = 1
        }
    }
    if (flag === 0){
        player.push(playerInfo)
    }
    res.send(player)
})

// {
//     "bookingNumber": 1,s
//     "sportId": "",
//     "centerId": "",
//     "type": "private",
//     "slot": "1362379137913",
//     "bookedOn": "1/3/2022",
//     "bookedFor": "4/5/2022"
// }

// {
//     "name": "Jayesh",
//     "dob": "23/2/1999",
//     "gender": "male", 
//     "city": "Mumbai",  
//     "sports": [  
//       "football"
//     ]
// }

router.get("/allPlayer", function(req, res){
    res.send(player)
})

router.post("/players/:playerName/bookings/:bookingId", function (req, res){
    let playerName = req.params.playerName.toLocaleLowerCase()
    let bookingId = req.params.bookingId
    let bookingNumber = parseInt(bookingId)
    let sportId = req.body.sportId
    let centerId = req.body.centerId
    let type = req.body.type
    let slot = req.body.slot
    let bookedOn = req.body.bookedOn
    let bookedFor = req.body.bookedFor
    const bookingObject = {}
    bookingObject.bookingNumber = bookingNumber
    bookingObject.sportId = sportId
    bookingObject.centerId = centerId
    bookingObject.type = type
    bookingObject.slot = slot
    bookingObject.bookedOn = bookedOn
    bookingObject.bookedFor = bookedFor
    for (let i = 0; i < player.length; i++){
        if (playerName === player[i].name){
            // res.send(player[i])
            let presentIds = player[i].bookings.map((x) => x.bookingNumber)
            // res.send(presentIds)
            // let check = presentIds.includes(bookingNumber)
            // res.send({status: check, idArray: presentIds, inputId: bookingId})
            if (presentIds.includes(bookingNumber)){
                // res.send(player.bookings)
                res.send({id: bookingId, status: "already exist"})
            }else{
                player[i].bookings.push(bookingObject)
                res.send(player[i])
            }     
        }
    }
    res.send({name: playerName, status: "does not exist" })
        
})


module.exports = welcome;