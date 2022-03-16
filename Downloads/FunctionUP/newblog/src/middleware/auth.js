const jwt = require("jsonwebtoken");
const blogsmodel = require('../model/blogsModel');
const authorModel = require('../model/authorModel');

const authentication = async function(req,res,next){

    try{
        let token = req.header["X-Auth-Token"];
        if(!token){
            token = req.headers["x-auth-token"]
          }
    
        if(!token){
            res.send({status:false,msg:"Token is not present"})
        }

        let decodedToken = jwt.verify(token,"Ashis-Auth");
        // console.log(decodedToken);
        if(!decodedToken){
            res.send({status:false,msg:"Token is invalid"})
        }

        // console.log(decodedToken.authorId);        
     
      

    }catch(err){
        res.status(404).send({msg:err.message})
    }

    next();
}

const authorization1 = async function(req,res,next){
    const token = req.headers["x-auth-token"]
    if (!token){
        return res.status(404).send({status: false, msg: "important header is missing"})
    }
    const data = req.params
    
    try{
        const blog = await blogsmodel.findById(data.blogId)
        // return res.send({data: blog.authorId})
        const decodeedToken = jwt.verify(token, "Ashis-Auth")
        console.log(decodeedToken);
        if(decodeedToken.authorId == blog.authorId){
            next()
        }else{
            return res.status(404).send({status: false, msg: "you are not authorized to do changes in this blog"})
        }
        
        // return res.send(decodeedToken)
    }catch(e){
        return res.status(400).send({status: false, msg: e.message})
    }
    
}

const authorization2 = async function(req,res,next){
    const token = req.header["x-auth-token"]
    if(!token){
        res.status(404).send({status:false,msg:"important header is missing"})
    }

    const data = req.query;
    try{
        const blog = await blogsmodel.findOne(data);
        const decodedToken = jwt.verify(token,"Ashis-Auth")
        if(decodedToken.id==blog.authorId){
            next();
        }else{
            req.status(404).send({status:false,msg:"you are not autorized"})
        }
    
    }catch(err){
        res.status(404).send({status:false,msg:err.message})
    }

}


module.exports.authorization2 = authorization2;
module.exports.authorization1 = authorization1;
module.exports.authentication=authentication;