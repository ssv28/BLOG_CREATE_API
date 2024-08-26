const express = require('express');
const router = express.Router();

// Like a blog post
router.post('/likes/:id', async (req, res) => {
    try {

        const BLOG = await BLOG.findById(req.params.id);
        if (!BLOG) {
            return res.status(404).json({
                message: 'Blog post not found'
            });
        }

        BLOG.likes += 1; // Increment the like counter
        await BLOG.save();

        res.status(200).json({
            message: 'Like added', likes: BLOG.likes
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server error', error
        });
    }
});

module.exports = router;
