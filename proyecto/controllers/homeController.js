

let homeController ={
index: function(req, res){


    res.render('home', { title: 'Express' });
},
agregarPost: function(req, res){



    res.render('agregarPost', { title: 'Express' })
},
miPerfil: function(req, res){

    

    res.render('miPerfil', { title: 'Express' })
}




};

module.exports = homeController