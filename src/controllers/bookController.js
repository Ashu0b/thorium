const bookModel = require("../models/bookModel")

const creatBookData = async function(req, res){
    let data = req.body;
    let saveBookData = await bookModel.create(data);
    res.send({msg: saveBookData})
}

const getBookData = async function(req, res){
    let allBooksData = await bookModel.find()
    res.send({data: allBooksData})
}

module.exports.creatBookData = creatBookData;
module.exports.getBookData = getBookData;