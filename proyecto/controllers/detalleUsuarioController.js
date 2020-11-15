let db = require('../database/models')
const post = db.Postear; 
const users = db.Usuario;
const comments = db.Comentario;
const op = db.Sequelize.Op 

let detalleUsuarioController ={

    index: function(req, res){
        let primaryKey = req.params.id
        if(req.session.user.id==primaryKey){
            res.redirect("/home/miPerfil")
        }
        else {
        users.findByPk(primaryKey,
            {
                include: [
                    {
                        all: true, nested: true
                    },
                ],
               
            },)

             .then(function(resultados){
                 //return res.send(resultados)
                    return res.render('detalleUsuario', {resultados : resultados})
                   
                })
        
            .catch(function(error){
                console.log(error)
            })
        }
        },
    show: function(req, res){
        let primaryKey = req.params.idUsuario
        users.findByPk(primaryKey,{
            include: [{association: 'comentario'},] 
        })
        .then(function(usuario){
            //return res.send(usuario)
            return res.render('comentarios', {usuario : usuario})
        })
        .catch(function(error){
            console.log(error)
        })
        }  
    };
    
    module.exports = detalleUsuarioController