const db = require('../database/models')
const post = db.Postear; 
const op = db.Sequelize.Op

let postsController = {

    index: function(req, res){
    let buscarPost = req.query.buscadorPosts;
    
    post.findAll({
        where: [
            {descripcion: { [op.like] : "%" + buscarPost + "%"}}
        ],
        order: [
            ['creacion', 'ASC']
        ],
        limit: 10
    })
    .then(function(resultados){
        console.log(resultados);
        return res.render('buscadorPosts', {resultados: resultados})
    })
    .catch(function(error){
        console.log(error)
    })
    }
    
    };
    
    
    module.exports = postsController