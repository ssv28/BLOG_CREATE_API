let AUTHER = require('../models/authentication');
let bcrypt = require('bcrypt');


exports.AutherCreate =  async function (req, res, next) {

    try {
  
      req.body.password = await bcrypt.hash(req.body.password, 10)
      let autherSignup = await AUTHER.create(req.body)
  
      res.status(201).json({
        status: "Success",
        message: "Auther Signup Successfull!",
        data: autherSignup
  
      })
  
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }

  exports.AutherLogin =  async function (req, res, next) {

    try {
  
      let autherLogin = await AUTHER.findOne({email : req.body.email})
  
      res.status(200).json({
        status: "Success",
        message: "Auther Login Successfull!",
        data: autherLogin
  
      })
  
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }