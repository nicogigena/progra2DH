const db = require('../database/models')
const post = db.Postear; 
const op = db.Sequelize.Op

let detalleController = {
    index: function(req, res){       
        res.render("No hay foto con ese ID")
    },
    porId: function(req, res){       
        let primaryKey = req.params.id;
                //Me falta la relación entre el id de la foto y todos los datos del usuario que subió la foto
        post.findByPk(primaryKey, {
            include: [
        {
            association: "usuario"
        },
        {
            association: "comentario"
        }
    ]})
            .then( function (resultados){
                console.log(resultados)

                return res.render('detallePost', { resultados });
            })
            .catch(function (error) {
                console.log(error);
            })
}
    
    };
    
    module.exports = detalleController