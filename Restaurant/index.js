const express = require('express')
const { ConnectBD } = require('./basedonne/bd'); //aplle de la BD
const  userRouter = require('./routes/routes'); //Apll du Router
const bodyparser = require('body-parser') //middleware express qui lit l'entrée d'un formulaire et le stocke lire les données HTTP POST

const request = require('postman-request'); //pour parler a API
const User = require('./basedonne/schema');

const app = express()
const port = 6000

ConnectBD().catch(err=> console.log(err)); //Affiche si t'a une error lors de la Connexion avec la BD
app.use(express.json()) // Recupere n'importe quel type de donnée qui vas etre envoyé vers nous

app.use(userRouter) // Use tout les Operation Effectué dans Route
app.use(bodyparser.json)
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(express.urlencoded())

app.get('/acc', (req , res) =>{

    res.sendFile(__dirname + '/public/index.html')
})




//Causer avec API
// fetch("mongodb://127.0.0.1:27017/restaurant").then(res => {
//     console.log(res)
// })


app.listen(port, ()=>{
    console.log(`Server Loading PORT : ${port}`)

} )

 