const db = require('../database/models')
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const users = db.Usuario;
const preguntas = db.Pregunta;

let loginController = {
        
    index: function(req, res){
        if(req.session.user!=undefined){ 
            return res.redirect("/home")
        }
        else {
        return res.render('login');
        }
    },
    login: function (req, res){
        //encontrar el email
        //Chequear que la contraseña coincida.
    if (req.session.user) {
        res.redirect("/home")
    }
        users.findOne({
            where: [{ email: req.body.email}]
        })

        .then(function(user){
            // puede pasar que el email no este en la base de datos
            if (user == null){
                return res.send("Email incorrecto")
            }
            else if (bcrypt.compareSync(req.body.contraseña, user.contraseña)==false){
                return res.send("Contraseña incorrecta")
            }
            //coinciden las contraseñas?
            else if (bcrypt.compareSync(req.body.contraseña, user.contraseña)){
                //guardar en session los datos del usuario

                req.session.user = user;

                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 24 * 30 });//30 dias
                    return res.redirect('/home');
                }
                //return res.send(req.session.user)
                // req.session.user = user.email
                return res.redirect('/home');
            }
        })
        .catch(function(error){
            console.log(error)
        })
    },
    email:function(req, res){
        return res.render("forgot")
    },
    forgot:function(req, res){
        users.findOne({
            where: [{ email : req.body.email}]
        })
            .then(resultados=>{
                return res.redirect("/login/forgot/" + resultados.id)
            })
    },
    forgotId:function(req, res){
        users.findByPk(req.params.id)
            .then(resultados=>{
                preguntas.findByPk(resultados.pregunta_id)
                .then(pregunta=>{
                    return res.render("forgotId",{resultados: resultados, pregunta: pregunta.pregunta, query: req.query})
                })
            })
    },
    forgotIdPost:function(req, res){
        users.findByPk(req.params.id)
            .then(resultados=>{
                if (bcrypt.compareSync(req.body.respuesta, resultados.pregunta_res)){ //la pregunta
                    users.update({
                        contraseña: bcrypt.hashSync(req.body.newPass, 10)}, {
                        where:[{id: req.params.id}]
                    })
                    return res.redirect("/login")
                } else{
                    return res.redirect("/login/forgot/" + req.params.id + "?status=fail")
                }
            })
        


        //return res.redirect("/login")
    }
};
    
    module.exports = loginController;