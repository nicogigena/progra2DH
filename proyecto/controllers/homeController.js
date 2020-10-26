let db = require('../database/models')
const post = db.Postear; 
const usuario = db.Usuarios;
const op = db.Sequelize.Op 

let homeController = {

index: function(req, res){

post.findAll(
    {order: [['creacion', 'ASC']]}
    )
.then(function(resultados){
    return res.render('home', {resultados: resultados})
    
})
.then(function(resultados){
    return res.render('login', {resultados : resultados})
})

.catch(function(error){
    console.log(error)
})
},

usuarios: function(req, res){

usuario.findAll()
.then(function(datos){
    console.log(datos)
    return res.render('home', {datos: datos})
})

.catch(function(error){
    console.log(error)
})

},

agregarPost: function(req, res){



    res.render('agregarPost', { datosUsuarios })
},

miPerfil: function(req, res){

    

    res.render('miPerfil', { datosUsuarios })
}

};

module.exports = homeController