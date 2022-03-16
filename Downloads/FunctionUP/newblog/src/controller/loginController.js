const authormodel = require('../model/authorModel');
const jwt = require('jsonwebtoken')

const loginAuthor = async function(req,res){
   try{
    let authorEmail = req.body.email;
    let authorpassword = req.body.password;
    
    let isAuthorPresent = await authormodel.findOne({email:authorEmail,password:authorpassword})

    if(!isAuthorPresent){
        res.status(401).send({msg:"Author is not present"})
    }

    let token = jwt.sign({
        authorId:isAuthorPresent._id.toString(),
        batch:"Blog Project"
    },"Ashis-Auth");

    res.setHeader("x-auth-token",token)
    res.send({"x-auth-token":token});
    


   }catch(err){
       res.status(404).send({"Error Message":err.message})
   }
}

module.exports.loginAuthor = loginAuthor