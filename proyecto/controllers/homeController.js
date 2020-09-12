

let datosUsuarios= require ("../datosUsuarios.js");
let homeController ={
index: function(req, res){


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