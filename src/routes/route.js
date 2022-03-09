const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const middl = require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/user", userController.user  )

router.post("/loginUser", userController.loginUser)

router.get("/users/:userId",middl.auth, userController.getUserData)

router.put("/users/:userId",middl.auth, userController.updateUser)

// router.delete("/users/:userId",middl.auth,userController.deleteUser)

module.exports = router;