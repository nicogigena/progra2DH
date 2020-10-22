const db = require('../database/models')
const post = db.Postear; 
const op = db.Sequelize.Op

let postsController = {

    index: function(req, res){
    let buscarPost = req.query.buscadorPosts;
    
    post.findAll({
        where: [
            {descripcion: { [op.like] : "%" + buscarPost + "%"}}
        ]
    })
    .then(function(resultados){
        return res.render('buscadorPosts', {resultados})
    })
    .catch(function(error){
        console.log(error)
    })
    }
    
    };
    
    module.exports = postsController