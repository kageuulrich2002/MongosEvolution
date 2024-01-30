const express = require('express')
const User = require('../basedonne/schema')//apll du model de la BD
const router = new express.Router() //pour créer les Diff routes  


/////////////////text//////////////////

// router.get('/acc', (req , res) =>{

//     res.sendFile(__dirname + '../public/index.html')
// })











//Create Menusur la BD
router.post('/users', async (req , res, next) => {

    const user = new User(req.body); //creé
  
     try  {  //Pour gerer les erreur et les afficher
          const saveUser = await user.save() //Sauvegade dans la BD
          res.status(201).send(saveUser) //en cas de succes
      } catch(e) {
        res.status(400).send(e) //en cas d'echec
      }
  })

//   //
//   router.post('/form', async (req , res,) => {
//     if (!req.body.nomduplat) {
//         res.status(400).json({ message : "Merci d'ajouter un nomduplat"})
//     }

//     const post = await PostModel.create({ //script pour recuperer les donner des champs 
//         nomduplat : req.body.nomduplat, //"message" variable du schema
//         description : req.body.description,
//         origine : req.body.origine,
//     })
//     res.status(200).json(post); 
// });





   //Read de la BD
   router.get('/users' , async(req, res, next) => { //Fine All
    try{
      const users =  await User.find({})
      res.send(users)
      console.log(users)
    }catch(e) {
      res.status(500).send(e);
    }
  })
  
  router.get('/users/:id' , async(req, res, next) => { //Fine by Id
    const userId = req.params.id  //Afiche par Id
  try{
    const users =  await User.findById(userId)
    if(!userId) return res.status(404).send('UserId not found!'); //Renvoie au cas ou sa n'existe pas
    res.send(users)
  }catch(e) {
    res.status(500).send(e);
  }
  })
   

  module.exports = router //export la route
