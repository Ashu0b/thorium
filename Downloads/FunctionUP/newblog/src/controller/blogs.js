const blogsmodel = require('../model/blogsModel');
const authorModel = require('../model/authorModel');
const moment = require('moment');
const express = require('express');


const blogsCreate = async function (req, res) {

    try {

        let blogsData = req.body;
        let authorId = req.body.authorId;
        let isAuthorPresent = await authorModel.findById(authorId);

        if (!isAuthorPresent) {
            res.send({ msg: "user Id is not present" })
        }

        let createEntryInBlog = await blogsmodel.create(blogsData);

        res.status(201).send({ data: createEntryInBlog })

    } catch (err) {
        res.status(400).send({ msg: "Error", error: err.message })
    }
}

const getBlogs = async function (req, res) {

    try {
        let data = req.query;
        let filter = {
            isDeleted: false,
            isPublished: true,
            ...data,

        };
        console.log(filter);
        let blogsPresent = await blogsmodel.find(filter)

        if (blogsPresent.length === 0) {
            res.status(404).send({ msg: "No blogs is present" })
        } else {
            res.status(200).send({ status: true, data: blogsPresent })
        }

    }
    catch (err) {
        res.status(400).send({ status: false, msg: err.message });
    }


}


const updateBlog = async function (req, res) {

    try {
        let data = req.body;
        let blogId = req.params.blogId;
        // console.log(blogId);
        // console.log("0");
        let isBlogPresenet = await blogsmodel.findOne({_id:blogId})
        console.log(isBlogPresenet);
       
        if (!isBlogPresenet) {
            res.send({ err: "blog not found" })
        }
        // console.log("1");
        if (isBlogPresenet.isDeleted == true) {
            res.status(400).send({ status: false, msg: "this blog is deleted" })
        }
        // console.log("2");
        if (data.isPublished == true) {
            data.PublishedAt = moment().format();
        } else {
            data.PublishedAt = " "
        }
        // console.log("3");
        if (data.isDeleted) {
            data.deletedAt = moment().format()
        }
        // console.log("4");
        const updatedBlogInLast = await blogsmodel.findOneAndUpdate({ _id: id }, data, { new: true })
        console.log(updatedBlogInLast);
        res.status(201).send({ status: true, msg: updatedBlogInLast })

    } catch (err) {

        res.status(400).send({ msg: "Error", error: err.message })

    }


}

const deleteBlog = async function(req,res){

    try{  
        let blogsId = req.params.blogId;
        let present = await blogsmodel.findOneAndUpdate({$and:[{_id:blogsId},{isDeleted:false}],$set:{isDeleted:true},new:true})
        res.status(200).send({})

    }
    catch(err){
        res.send({status:false,data:err.message})
}
}   

const deleteBlogs = async function(req,res){
   try{
    let data = req.query;
    let filter = {
        isPublished:false,
        ...data};
    let findBlogs = await blogsmodel.findOneAndDelete(filter);
    res.send({msg:findBlogs})
   }catch(err){
       res.status(404).send({status:false,msg:""})
   }
}

module.exports.deleteBlogs = deleteBlogs;
module.exports.deleteBlog = deleteBlog;
module.exports.getBlogs = getBlogs;
module.exports.updateBlog = updateBlog;
module.exports.blogsCreate = blogsCreate;