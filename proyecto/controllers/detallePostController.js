const db = require('../database/models')
const post = db.Postear; 
const users = db.Usuario;
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
                    all: true, nested: true
                },
            ]})
            .then(function(resultados){
                //return res.send(resultados)
                return res.render('detallePost', { resultados : resultados });
            })
            .catch(function (error) {
                console.log(error);
            })
},
edit: function (req,res){

let idAEditar= req.params.id

post.findByPk(idAEditar)

.then ( function(postear){

    return res.render("postEdit", {postear})
})
.catch(function (error) {
    console.log(error);
})

;

},
update: function (req,res){
    //nos va a preguntar que queremos actualizar y donde.
  

    let postAActualizar = req.body
    post.update( //lo que quiero actualizar
        postAActualizar

    ,{ //a donde lo quiero actualizar

        where: { 
            id: req.params.id
         }

    })
    .then(function(req,res){
        return res.redirect("/home")
    })
    .catch(function(error){
        console.log(error)
    })

},
destroy: function (req,res){
    //necesitamos decirle donde va a borrar, sino va a borrar todos los posts de la base de datos
    let idABorrar = req.params.id;
    post.destroy({
        where:{
            id:idABorrar
        }
    })
    return res.redirect('/home')
}

    };
    
    module.exports = detalleController