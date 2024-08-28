let AUTHER = require('../models/authentication');
let bcrypt = require('bcrypt');

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sarvaiyachandrika2023.katargam@gmail.com",
    pass: "nmxqlclhszjcsbky",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(mail) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "sarvaiyachandrika2023.katargam@gmail.com", // sender address
    to: mail, // list of receivers
    subject: "Nodemailer", // Subject line
    // text: "Hello world?", // plain text body
    html:'<b style="color: blue; font-size: 50px;">Hello Nodemailer?</b>', // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

exports.AutherCreate =  async function (req, res, next) {

    try {
  
      req.body.password = await bcrypt.hash(req.body.password, 10)
      let autherSignup = await AUTHER.create(req.body)
  
      main(req.body.email).catch(err => err.message)

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