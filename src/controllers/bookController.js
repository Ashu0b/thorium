const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publisherModel = require("../models/newPublisher")


const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher_id

    if(!authorId) return res.send(' Not valid.')

    let author = await authorModel.findById(authorId)
    if(!author) return res.send('Not valid  authorId')


    if(!publisherId) return res.send('Not valid as the publisher.') 

    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('Not valid as no publisher.')


    console.log(book)
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}
const putBook = async function (req, res){
    const update = await bookModel.updateMany({$or: [{"publisher": "622152291c963dadcfbd5b7a"}, {"publisher": "622151eb1c963dadcfbd5b76"}]},{"isHardCover":true},)
    res.send(updated)
}
const updateByRatings = async function (req, res){
    const updatePrice = await bookModel.updateMany({ratings: {$gt: 3.5}},{"price":+10}, {new:true})
    res.send(updatePrice)
}
module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.putBook=putBook
module.exports.updateByRatings=updateByRatings