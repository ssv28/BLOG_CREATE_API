let BLOG = require('../models/blog');



exports.blogCreate = async function (req, res, next) {

    try {

        let blogCreate = await BLOG.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Blog Data Create Successfully!",
            data: blogCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.blogData = async function (req, res, next) {

    try {

        let blogData = await BLOG.find().populate("authId")

        res.status(200).json({
            status: "Success",
            message: "Blog Found Successfully!",
            data: blogData

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.blogFindOne = async function (req, res, next) {


    try {

        let blogFind = await BLOG.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Blog Find Successfully!",
            data: blogFind

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.blogUpdate = async function (req, res, next) {

    try {

        let blogUpdate = await BLOG.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Blog Update Successfully!",
            data: blogUpdate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.blogDelete = async function (req, res, next) {

    try {
  
      await BLOG.findByIdAndDelete(req.params.id)
  
      res.status(200).json({
        status: "Success",
        message: "Blog Delete Successfully!",
  
      })
  
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }
  