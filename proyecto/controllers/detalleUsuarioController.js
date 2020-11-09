let db = require('../database/models')
const post = db.Postear; 
const users = db.Usuario;
const op = db.Sequelize.Op 

let detalleUsuarioController ={

    index: function(req, res){
        let primaryKey = req.params.id
        users.findByPk(primaryKey,
            {
                include: [
                    {
                        all: true, nested: true
                    },
                ],
            })

             .then(function(resultados){
                 //return res.send(resultados)
                    return res.render('detalleUsuario', {resultados: resultados})
                   
                })
        
        .catch(function(error){
            console.log(error)
        })
    },
    
    
    
    
    };
    
    module.exports = detalleUsuarioController