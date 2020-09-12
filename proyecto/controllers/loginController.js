let datosUsuarios= require ("../datosUsuarios.js");
let loginController ={
    index: function(req, res){
    
    
        res.render('login', { datosUsuarios });
    }
    
    
    
    
    };
    
    module.exports = loginController