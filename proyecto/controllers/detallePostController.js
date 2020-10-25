const db = require('../database/models')
const post = db.Postear; 
const op = db.Sequelize.Op

let detalleController = {
    index: function(req, res){       
            post.findAll()
            .then(function(resultados){
                console.log(resultados);
                return res.render('detallePost', {resultados: resultados})
            })
            .catch(function(error){
                console.log(error)
            })
    }
    
    };
    
    module.exports = detalleController