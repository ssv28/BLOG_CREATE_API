const express = require('express');
const COMMENT = require('../models/comment'); // Adjust the path to your Comment model
const BLOG = require('../models/blog'); // Adjust the path to your Blog model
const AUTHOR = require('../models/authentication'); // Adjust the path to your Author model
const CATEGORY = require('../models/category'); // Adjust the path to your Category model

const commentRouter = express.Router();

// Create a new comment
commentRouter.post('/', async (req, res) => {
    try {
        const { content, blogId, authorId, categoryId } = req.body;

        // Validate that the referenced Blog, Author, and Category exist
        const blog = await BLOG.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        if (categoryId) {
            const category = await CATEGORY.findById(categoryId);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
        }

        const newComment = new COMMENT({ content, blogId, authorId, categoryId });
        await newComment.save();

        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment', error });
    }
});

// Get all comments for a specific blog post
commentRouter.get('/blogs/:blogId', async (req, res) => {
    try {
        const { blogId } = req.params;
        const comments = await COMMENT.find({ blogId }).populate('authorId', 'name email').populate('categoryId', 'categoryName');

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments', error });
    }
});

// Update a comment
commentRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;

        const updatedComment = await COMMENT.findByIdAndUpdate(id, { content, updatedAt: Date.now() }, { new: true });

        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating comment', error });
    }
});

// Delete a comment
commentRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedComment = await COMMENT.findByIdAndDelete(id);

        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json({
            message: 'Comment deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting comment', error
        });
    }
});

module.exports = commentRouter;
