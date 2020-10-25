let datosUsuarios= require ("../datosUsuarios.js");
let loginController ={
    index: function(req, res){
    
        return res.render('login', { datosUsuarios: datosUsuarios });
    }
    
    
    
    
    };
    
    module.exports = loginController