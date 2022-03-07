
const purchaseModel= require("../models/purchaseModel")

const createPurchase= async function (req, res,next) {
    let data= req.headers

    let savedData= await purchaseModel.create(data)
    res.send({msg: savedData})
}






module.exports.createPurchase= createPurchase