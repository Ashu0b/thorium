const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const Middleware = require('../middleware/globalMiddleware')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/globalMiddleware", Middleware.globalMiddleware)

module.exports = router;