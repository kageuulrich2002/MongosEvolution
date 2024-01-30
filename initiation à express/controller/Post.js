const Post = require("../models/Post")

// Récupérer tous les posts
const getAllPosts = async (req, res) => {
    const data = await Post.find({}).populate('author').sort({ createdAt: -1 })
    res.status(200).json(data)
}

// Ajouter un post
const createPost = async (req, res) => {
    try {
        const data = await Post.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllPosts,
    createPost
}