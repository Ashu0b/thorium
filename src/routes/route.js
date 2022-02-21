const express = require('express');
const router = express.Router();
let obj=require('./logger')
router.get('/test-me', function (req, res) {
     res.send('Welcome to my application. I am Ashis Bisoi and a part of FunctionUp Thorium cohort')
     console.log(obj.endpoint)
    obj.Welcome('Welcome')
   
});

module.exports = router;