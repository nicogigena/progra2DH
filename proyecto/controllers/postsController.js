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
            ['creacion', 'DESC']
        ],
        limit: 20,
        include: [
            {
                association: "usuario"
            },
            {
                association: "comentario"
            }
        ],
    })
    .then(function(resultados){
        //return res.send(resultados)
        return res.render('buscadorPosts', {resultados: resultados})
    })
    .catch(function(error){
        console.log(error)
    })
    }
    
    };
    
    
    module.exports = postsController