let db = require('../database/models')
const post = db.Postear; 
const op = db.Sequelize.Op 

let homeController = {

index: function(req, res){

post.findAll()
.then(function(resultados){
    console.log(resultados)
    return res.render('home', {resultados: resultados})
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