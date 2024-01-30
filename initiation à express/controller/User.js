const User = require("../models/User")

// Récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
}

//récuperer un seul Id
const getUser = async (req, res) =>{
 
    try {
        const { id } = req.params
        const user = await User.findById(id)

    if(!user) {
        res.status(404).json({ error: "User not found !"})
    } 
        res.status(200).json(user)
    }catch (error) {
        res.status(400).json({ error : error.message}) //Si y'a un Pb envoie le message d'erreru
    }
}

// Ajouter un utilisateur
const createUser = async (req, res) => {

    console.log(req.body)

    try {
        const { name, email, password } = req.body

        const user = await User.create({ name, email, password })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Mettre à jour un utilisateur
const updateUser = async (req, res) =>{

    try {
        const { id } = req.params
        const { body } = req

        const user = await User.updateOne({_id : id}, {$set : body})

        if(user.modifiedCount === 0){ //savoir si la modifiacation a été efectué
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}


//Mettre à jour un utilisateur
const deleteUser = async (req, res) =>{

    try {
        const { id } = req.params

        const user = await User.deleteOne({_id : id})

        if(user.deleteCount === 0){
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUser ,
    updateUser,
    deleteUser
}