const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("Im a good developer")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher", bookController.createPublisher)

router.get("/getBook", bookController.getBook)

module.exports = router;