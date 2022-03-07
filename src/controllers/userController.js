const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    console.log(req.newAtribute)
    res.send({msg: savedData})
}



module.exports.createUser= createUser
