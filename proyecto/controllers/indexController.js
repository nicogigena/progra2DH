let datosUsuarios= require ("../datosUsuarios.js");
let indexController ={
    index: function(req, res){
    
    
        res.render('registracion', { datosUsuarios });
    },
    store: function (req, res){
        let register = {
            email: req.body.email,
            contraseña: req.body.contraseña,
            nacimiento: req.body.nacimiento,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            cp: req.body.cp,
            nombre: req.body.nombre,
            apellido: req.body.apellido
        }

        return res.render('login', register)

    }
    
    
    
    };
    
    module.exports = indexController