const db = require('../database/models')
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const users = db.Usuario;

let loginController = {
    index: function(req, res){
    
        return res.render('login');
    },
    login: function (req, res){
        //encontrar el email
        //Chequear que la contraseña coincida.
     users.findOne({
        where: [{ email: req.body.email}]
     })

     .then(function(user){
         // puede pasar que el email no este en la base de datos
         if (user == null){
             return res.send("Email incorrecto")
         } else if (bcrypt.compareSync(req.body.contraseña, user.contraseña)==false){
             return res.send("Contraseña equivocada")
         }  else if (bcrypt.compareSync(req.body.contraseña, user.contraseña)){          //coinciden las contraseñas?
            //guardar en session los datos del usuario

            req.session.user = user;
            //return res.send(req.session.user)
             return res.redirect('/home');
        }
     })

     .catch(function(error){
         console.log(error)
     })
 }  
    };
    
    module.exports = loginController;