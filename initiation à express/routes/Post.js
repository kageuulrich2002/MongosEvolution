const express = require('express')
const { getAllPosts, createPost } = require('../controller/Post')

const router = express.Router()

router.get("/", getAllPosts)
router.post("/", createPost)

module.exports = router