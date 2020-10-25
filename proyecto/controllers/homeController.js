let datosUsuarios= require ("../datosUsuarios.js");
let db = require('../database/models/index')
const post = db.Postear; 
const op = db.Sequelize.Op 

let homeController = {

index: function(req, res){

post.findAll()
.then(function(resultados){
    return res.render('home', {resultados: resultados})
})
.catch(function(error){
    console.log(error)
})

    res.render('home', { datosUsuarios });
},

agregarPost: function(req, res){



    res.render('agregarPost', { datosUsuarios })
},

miPerfil: function(req, res){

    

    res.render('miPerfil', { datosUsuarios })
}




};

module.exports = homeController