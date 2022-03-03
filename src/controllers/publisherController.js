const publisherModel= require("../models/newPublisher")

const createPublisher = async function (req, res) {
    let publisher = req.body
    let createPublisher = await publisherModel.create(publisher)
    res.send({data: createPublisher})

}

module.exports.createPublisher = createPublisher