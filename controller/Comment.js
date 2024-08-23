let COMMENT = require('../models/comment');

exports.commentCreate = async function (req, res, next) {

    try {

        let commentCreate = await COMMENT.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Comment Create Successfully!",
            data: commentCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.commentData = async function (req, res, next) {

    try {

        let commentData = await COMMENT.find()

        res.status(200).json({
            status: "Success",
            message: "Comment Found Successfully!",
            data: commentData

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.commentFindOne = async function (req, res, next) {


    try {

        let commentFind = await COMMENT.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Comment Find Successfully!",
            data: commentFind

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.commentUpdate = async function (req, res, next) {

    try {

        let commentUpdate = await COMMENT.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Comment Update Successfully!",
            data: commentUpdate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.commentDelete = async function (req, res, next) {

    try {
  
      await COMMENT.findByIdAndDelete(req.params.id)
  
      res.status(200).json({
        status: "Success",
        message: "Comment Delete Successfully!",
  
      })
  
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }