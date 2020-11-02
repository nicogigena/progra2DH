const db = require('../database/models')
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const users = db.Usuario;

let indexController ={
    index: function(req, res){
    
        return res.render('registracion');
    },
    store: function (req, res){
        let register = {
            email: req.body.email,
            contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            nacimiento: req.body.nacimiento,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            cp: req.body.cp,
            nombre: req.body.nombre,
            apellido: req.body.apellido
        }
        users.create(register);
        return res.redirect('/login')
        //return res.send(register)
    },
    redirect: function (req,res){
        let logueado = 0
        if (logueado==1){ 
            return res.redirect("/home")
        } else {
            return res.redirect("/registracion")
        }

    }
    
    
    
    };
    
    module.exports = indexController;