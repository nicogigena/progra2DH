let db = require('../database/models')
const post = db.Postear; 
const usuario = db.Usuario;
const op = db.Sequelize.Op 

let homeController = {
    
    index: function(req, res){
        
        post.findAll(
            {order: [['creacion', 'ASC']]}
            )
            .then(function(resultados){
                usuario.findAll()
                .then(function(datos){
                    return res.render('home', {datos: datos, resultados})
                })
                .catch(function(error){
                    console.log(error)
                })
            })
        
        .catch(function(error){
            console.log(error)
        })
    },
    
        
        agregarPost: function(req, res){
            
            
            
            res.render('agregarPost', { datosUsuarios })
        },
        
        miPerfil: function(req, res){
            
            
            
            res.render('miPerfil', { datosUsuarios })
        },

        saludar: function(req, res){
            usuario.findAll()
            .then(function(usuario){
                return res.render('headerLogueado', {usuario, user: req.session.user})
            })
            .catch(function(error){
                console.log(error)
            })
        }
        
    };
    
    module.exports = homeController