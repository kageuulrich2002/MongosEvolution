const express = require('express')
const { getAllUsers, createUser, getUser, updateUser, deleteUser} = require('../controller/User')

const router = express.Router()

router.get("/", getAllUsers)  
router.get("/:id", getUser)
router.post("/", createUser) 
router.put("/:id", updateUser) 
router.delete("/:id", deleteUser) 

module.exports = router