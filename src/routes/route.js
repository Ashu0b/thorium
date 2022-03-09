const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const router = express.Router();
const userController= require("../controllers/userController");
const tokenCheck = require("../middleware/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users", userController.user  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",tokenCheck.middle, userController.getUserData)

router.put("/users/:userId",tokenCheck.middle,userController.updateUser)

router.delete("/users/:userId",tokenCheck.middle, userController.deleteUser)


module.exports = router;  