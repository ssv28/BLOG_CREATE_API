let express = require('express');
let router = express.Router();

let authorController = require("../controller/Author")

router.post('/signup', authorController.AutherCreate);

router.post('/login', authorController.AutherLogin);

module.exports = router;
