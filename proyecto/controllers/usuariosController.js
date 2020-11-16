const db = require('../database/models')
const usuario = db.Usuario; 
const op = db.Sequelize.Op

let usuariosController = {

    index: function(req, res){
        let buscarUsuario = req.query.buscadorUsuarios;
        
        usuario.findAll({
            where: [
                { 
                email: { [op.like] : "%" + buscarUsuario + "%"}, 
                } 
            ],
        })
        .then(function(resultados){
            return res.render('buscadorUsuarios', {resultados})
        })
        .catch(function(error){
            console.log(error)
        })
        }
    
    };
    
    module.exports = usuariosController