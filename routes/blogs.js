let express = require('express');
let router = express.Router();

let blogController = require("../controller/Blog")


router.post('/create', blogController.blogCreate);


router.get('/', blogController.blogData);


router.get('/:id', blogController.blogFindOne);


router.patch('/:id', blogController.blogUpdate);


router.delete('/:id', blogController.blogDelete);


// router.get('/search', async function (req, res, next) {

//   try {


//     res.status(200).json({
//       status: "Success",
//       message: "Blog Delete Successfully!",
//       data : searchBlog
//     })

//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message
//     })
//   }

// });

module.exports = router;
