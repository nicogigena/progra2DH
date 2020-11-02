let db = require('../database/models')
const post = db.Postear; 
const users = db.Usuario;
const op = db.Sequelize.Op 

let homeController = {
    
    index: function(req, res){
        
        post.findAll(
            {order: [['creacion', 'ASC']]}
            )
            .then(function(resultados){
                users.findAll()
                .then(function(datos){
                    //res.send(resultados)
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
            
            return res.render('agregarPost')


        },

        storePost: function (req, res){
            
            let idLogueado = 1// Despues definir por usuario loggeado, falta la relación entre usuario y sus posteos
            let postear = {
                usuario_id: idLogueado,
                url: req.body.url,
                descripcion: req.body.descripcion,
                ubicacion: req.body.ubicacion
            }
            
            //db.Postear.create(posteo);
          // return res.redirect('/home')
          db.Postear.create(posteo);
          
          return res.redirect('/home')

        }
        
        ,
        
        miPerfil: function(req, res){
            let idLogueado = 1// Despues definir por usuario loggeado, falta la relación entre usuario y sus posteos
            users.findOne({
                where: [{ id: idLogueado}] 
             })
                .then(function(resultados){
                    //return res.send(resultados)
                    return res.render('miPerfil', {resultados})
                })

            
            //res.render('miPerfil', { datosUsuarios })
        },

        saludar: function(req, res){
            

            users.findAll()
            .then(function(usuario){
                return res.render('headerLogueado', {usuario, user: req.session.user})
            })
            .catch(function(error){
                console.log(error)
            })
        }
        
    };
    
    module.exports = homeController