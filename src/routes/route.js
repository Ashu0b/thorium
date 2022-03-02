const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const authorController= require("../controllers/authorController") //read the all code of controller by route

router.get("/test-me", function (req, res) {
    res.send("I am a Excellent Backend Developer!No one compare with me.")
})

// the request send by the controller comes to route for the response // code written below will execute by response
router.post("/createBook", BookController.createBook  )

router.post("/getBookByAuthor", BookController.getBookByAuthor)

router.post ("/createAuthor", BookController.createAuthor)

router.post("/findAndUpdate", BookController.findAndUpdate)



module.exports = router;