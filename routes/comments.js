let express = require('express');
let router = express.Router();

let commnetController = require("../controller/Comment")


router.post('/create', commnetController.commentCreate);


router.get('/', commnetController.commentData);


router.get('/:id', commnetController.commentFindOne);


router.patch('/:id', commnetController.commentUpdate);


router.delete('/:id', commnetController.commentDelete);




module.exports = router;
