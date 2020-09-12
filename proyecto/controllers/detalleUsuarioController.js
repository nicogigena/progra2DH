let datosUsuarios= require ("../datosUsuarios.js");
let detalleUsuarioController ={
    index: function(req, res){
    
    
        res.render('detalleUsuario', { datosUsuarios});
    }
    
    
    
    
    };
    
    module.exports = detalleUsuarioController