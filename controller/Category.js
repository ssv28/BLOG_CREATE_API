let CATEGORY = require('../models/category');

exports.categoryCreate = async function (req, res, next) {

    try {

        let categoryCreate = await CATEGORY.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Category Create Successfully!",
            data: categoryCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.categoryData = async function (req, res, next) {

    try {

        let categogyData = await CATEGORY.find()

        res.status(200).json({
            status: "Success",
            message: "Category Found Successfully!",
            data: categogyData

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.categoryFindOne = async function (req, res, next) {

    try {

        let categoryFind = await CATEGORY.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Category Find Successfully!",
            data: categoryFind

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.categoryUpdate = async function (req, res, next) {

    try {

        let categoryUpdate = await CATEGORY.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Category Update Successfully!",
            data: categoryUpdate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.categoryDelete = async function (req, res, next) {

    try {

        await CATEGORY.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Category Delete Successfully!",

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}