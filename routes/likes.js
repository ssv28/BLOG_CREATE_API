const express = require('express');
const router = express.Router();
const LIKE = require('../models/like'); // Assuming the LIKE model is in the models folder


// Route to like a blog post
router.post('/like', async (req, res) => {
    try {
        const { blogId, authId } = req.body;

        // Check if the user has already liked this blog post
        const existingLike = await LIKE.findOne(req.body);
        if (existingLike) {
            return res.status(400).json({
                message: 'You have already liked this blog.'
            });
        }

        // Create a new like entry
        const newLike = new LIKE({ blogId, authId, count: 1 });
        await newLike.save();

        res.status(201).json({
            message: 'Post liked successfully!'
        });

    } catch (error) {

        res.status(500).json({
            message: 'An error occurred.', error
        });
    }
});



// Route to unlike a blog post
router.post('/unlike', async (req, res) => {
    try {
        const { blogId, authId } = req.body;

        // Find the like entry and delete it
        const like = await LIKE.findOneAndDelete({ blogId, authId });
        if (!like) {
            return res.status(404).json({
                message: 'Like not found.'
            });
        }

        res.status(200).json({
            message: 'Post unliked successfully!'
        });

    } catch (error) {
        res.status(500).json({
            message: 'An error occurred.', error
        });
    }
});


// Route to get the like count for a specific blog post
// router.get('/:blogId', async (req, res) => {
//     try {

//         // Count the number of likes for this blog post
//         const likeCount = await LIKE.countDocuments(req.params.blogId);


//         console.log(likeCount);

//         res.status(200).json({ likeCount });

//     } catch (error) {

//         res.status(500).json({
//             status: "Fail",
//             message: 'An error occurred.', error
//         });
//     }
// });

router.post("/like/:id", async (request, response) => {
    const post_id = request.params.id;
    const post = await LIKE.findOne({ _id: post_id });

    LIKE.likes += 1;

    const updateDocument = await LIKE.findOneAndUpdate(
        { _id: post_id },
        post,
        {
            new: true,
        }
    );

    return response.status(201).json({
        msg: "Liked post",
        data: updateDocument
    });
});

// Route to check if a specific user liked a blog post
router.get('/liked', async (req, res) => {
    try {
        const { blogId, authId } = req.query;
        console.log(req.query);

        // Check if the like exists
        const like = await LIKE.findOne({ blogId, authId });
        if (!like) {
            return res.status(404).json({
                liked: false
            });
        }

        res.status(200).json({
            liked: true
        });

    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: 'An error occurred.', error
        });
    }
});

module.exports = router;
