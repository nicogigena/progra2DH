const db = require('../database/models')
const post = db.Postear; 
const users = db.Usuario;
const coment = db.Comentario;
const op = db.Sequelize.Op;
const url = require('url');
const querystring = require('querystring');

let detalleController = {
    index: function(req, res){       
        res.render("No hay foto con ese ID")
    },
    porId: function(req, res){       
        
        //res.send(req.query.texto)
        if(req.query.texto){
            res.redirect("/detallepost/" + req.params.id + "/comentar?texto=" + req.query.texto)
        }
        
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
comentar: function(req, res){
                //Me falta la relación entre el id de la foto y todos los datos del usuario que subió la foto
   
    let comentar = {
        post_id: req.params.id,
        usuario_id: req.session.user.id,
        texto: req.query.texto,
        creacion: 0,
    }
              // return res.redirect('/home')
    coment.create(comentar);   
    return res.redirect('/detallePost/' + req.params.id)
    

},
edit: function (req,res){
let idAEditar= req.params.id
post.findByPk(idAEditar)

.then ( function(postear){
    if(req.session.user.id==postear.usuario_id){
    return res.render("postEdit", {postear})
    }
    else{
        res.redirect('/home')
    }
})
.catch(function (error) {
    console.log(error);
})

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
    .then(function(){
        return res.redirect("/home")
    })
    .catch(function(error){
        console.log(error)
    })

},
destroy: function (req,res){
    //necesitamos decirle donde va a borrar, sino va a borrar todos los posts de la base de datos
    let idABorrar = req.params.id;
    if(req.session.user.id==post.usuario_id){
    post.destroy({
        where:{
            id:idABorrar
        }
    })
}
    return res.redirect('/home')
}


    };
    
    module.exports = detalleController