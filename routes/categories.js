let express = require('express');
let router = express.Router();

let categoryController = require("../controller/Category")


router.patch('/create', categoryController.categoryCreate);


router.get('/', categoryController.categoryData);


router.get('/:id', categoryController.categoryFindOne);


router.patch('/:id', categoryController.categoryUpdate);


router.delete('/:id', categoryController.categoryDelete);


// router.get('/search', async function (req, res, next) {

//   try {


//     res.status(200).json({
//       status: "Success",
//       message: "Caltegory Delete Successfully!",
//       data : searchCategory
//     })

//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message
//     })
//   }

// });

module.exports = router;
