// module 1
let obj=require('./logger')
router.get('/test-me', function (req, res) {
     res.send('Welcome to my application. I am Ashis and a part of FunctionUp Thorium cohort')
     console.log(obj.endpoint)
    obj.log('Welcome')
   
});