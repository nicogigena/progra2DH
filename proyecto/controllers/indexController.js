const db = require('../database/models')
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const users = db.Usuario;
const preguntas = db.Pregunta;

let indexController ={

    index: function(req, res){
        if(req.session.user!=undefined){ 
            return res.redirect("/home")
        }
        else {
        preguntas.findAll({
            order: [["id", "ASC"]]
        })
            .then(resultados=>{
                return res.render("registracion", {resultados: resultados})
            })
            .catch(function(error){
                console.log(error)
            })
        
        }
    },
    store: function (req, res){
        if (req.session.user) {
            res.redirect("/home")
        }
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
            pregunta_res: bcrypt.hashSync(req.body.respuesta, 10)
        }
        users.create(register);
        return res.redirect('/login')
        //return res.send(register)
    },
    redirect: function (req,res){

        if (req.session.user || req.cookies.userId) {
            return res.redirect("/home") 
        } else if(req.cookies.userId){
            users.findByPk(req.cookies.userId)
                .then(resultados=>{
                    req.session.user = resultados
                    return res.redirect("/home")
                })
                .catch(error=>{
                    console.log(error)
                })
        }  else{
            return res.redirect("/registracion")
        }

    }
    
    
    
    };
    
    module.exports = indexController;