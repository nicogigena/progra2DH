const db = require('../database/models')
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const users = db.Usuario;
const preguntas = db.Pregunta;

let indexController ={
    index: function(req, res){
        preguntas.findAll({
            order: [["id", "ASC"]]
        })
            .then(resultados=>{
                return res.render("registracion", {resultados: resultados})
            })
            .catch(function(error){
                console.log(error)
            })
        
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
            apellido: req.body.apellido,
            fotoPerfil: req.body.fotoPerfil,
            pregunta_id: req.body.pregunta,
            pregunta_res: req.body.respuesta
        }
        users.create(register);
        return res.redirect('/login')
        //return res.send(register)
    },
    redirect: function (req,res){
        let logueado
        if (req.session.user) {
            logueado = 1
        } else {
            logueado = 0
        }
        if (logueado==1){ 
            return res.redirect("/home") 
        } else {
            return res.redirect("/registracion")
        }

    }
    
    
    
    };
    
    module.exports = indexController;