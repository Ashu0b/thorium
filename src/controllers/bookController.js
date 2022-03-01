const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( { authorName , bookName  } )
}
const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find({pages: { $gt:  50 } ) 
