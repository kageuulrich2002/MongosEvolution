//Creation de note Model ( TABLE )***************
const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema(
  {  //Create the Model same to table 
    nomduplat : {
      type : String,
      required : true,  // "required : true" ne lance pas le get si tout les champs n'existe pas
      unique : true,    //evite les double copte @mail
    },

  description: {
      type : String,
      required: true,  // "required : true" ne lance pas le get si tout les champs n'existe pas
    },

    origine: {
        type : String,
        required: true,  // "required : true" ne lance pas le get si tout les champs n'existe pas
      },
},
{
    //pour indiquer la date de creation et de modification de la table
    timestamps: true, 
}
)




const User = mongoose.model('menurestau' , userSchema )  //Creation du schema dans la BD

module.exports = User; //export de la fontion BD