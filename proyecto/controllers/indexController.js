let datosUsuarios= require ("../datosUsuarios.js");
let indexController ={
    index: function(req, res){
    
    
        res.render('registracion', { datosUsuarios });
    }
    
    
    
    };
    
    module.exports = indexController