const { count } = require("console")
const authorModel= require("../models/authorModel")

const createAuthor = async function(req, res){
    let data = req.body
    const saveAuthor = await authorModel.create(data)
    res.send(saveAuthor)
}



module.exports.createAuthor = createAuthor