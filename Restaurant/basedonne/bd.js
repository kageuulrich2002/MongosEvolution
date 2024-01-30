//Connexion avec la Base de Donnée********************
const mongoose =  require('mongoose')

async function ConnectBD() {
  await mongoose.connect("mongodb://127.0.0.1:27017/restaurant") //Connexion avec la BD MongoBD

  console.log('DB connect')
}

module.exports = { //Permet d'exporter
    ConnectBD
}
  

//mongodb://127.0.0.1:27017/restaurant 