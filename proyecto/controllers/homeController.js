let db = require('../database/models')
const post = db.Postear; 
const users = db.Usuario;
const op = db.Sequelize.Op 
const preguntas = db.Pregunta;
const bcrypt = require('bcryptjs');

let homeController = {
    
    index: function(req, res){
        
        post.findAll(
            {
                include: [
                    {
                        all: true, nested: true
                    },
                ],
                /* include: [
                    {
                        association: "usuario"
                    },
                    {
                        association: "comentario"
                    }
                ], */
                order : [['creacion', 'DESC']]
            })

             .then(function(resultados){
               /* users.findAll({
                    include: [
                        {
                            association: "comentario"
                        }

                    ], */
                    //return res.send({resultados: resultados})
                    
                    return res.render('home', {resultados: resultados})
                   
                })
                // .then(function(datos){ 
                    
                   // return res.render('home', {resultados:resultados})
                   //return res.send({datos: datos, resultados})
                    //return res.render('home', {datos: datos, resultados})
                // })
                // .catch(function(error){
                 //   console.log(error)
               // }) 
           // }) */
        
        .catch(function(error){
            console.log(error)
        })
    },
    agregarPost: function(req, res){
        if(req.session.user!=undefined){
        
        return res.render('agregarPost')

        }
        else{
        res.redirect('/login')
        }
    },
    storePost: function (req, res){
        
        let postear = {
            usuario_id: req.session.user.id,
            url: req.body.url,
            descripcion: req.body.descripcion,
            ubicacion: req.body.ubicacion
        }
        // return res.redirect('/home')
        post.create(postear);   
        return res.redirect('/home')

    },    
    miPerfil: function(req, res){
        if (req.session.user == undefined) {
            return res.redirect("/login")
        }

        let idLogueado = req.session.user.id// Despues definir por usuario loggeado, falta la relación entre usuario y sus posteos
        
        users.findOne({
            where: [{ id: idLogueado}],
            include: [{association: 'pregunta'}, {association: 'postear'}] 
        })
            .then(resultados=>{
                req.session.user = resultados
                return res.render('miPerfil', {resultados:resultados, query:req.query})
            })
            .catch(function(error){
                console.log(error)
            })
    },    
    miPerfilEdit: function(req, res){

        if(req.body.rechazar == 1){
            return res.redirect("/home/miPerfil")
        } else if(req.body.nombreNew){
            users.update({
                nombre: req.body.nombreNew}, {
                where:[{id: req.session.user.id}]
            })
            req.session.user.nombre = req.body.nombreNew
            return res.redirect("/home/miPerfil")
        }
    },
    miPerfilEditTodo: function(req, res){
        if (req.session.user == undefined) {
            return res.redirect("/login")
        }
        else{
        users.findOne({
            where:[{id: req.session.user.id}],
            include: [{association: 'pregunta'}] 
        })
            .then(resultados=>{
                return res.render("miPerfilEdit", {resultados: resultados, query: req.query})
            })
            .catch(function(error){
                console.log(error)
            })
        }
    },
    miPerfilEditTodoPost: function(req, res){
        let usuarioProm = users.findByPk(req.session.user.id, {
            include: [{association: 'pregunta'}]
        });

        let allProm = users.findOne({
            where:[{email: req.body.email}]
        })
        let usuarioEdit = {
            email: req.body.email,
            nacimiento: req.body.nacimiento,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            cp: req.body.cp,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fotoPerfil: req.body.fotoPerfil
        }
        
        Promise.all([usuarioProm, allProm])
            .then(function([usuario, email]){
                let pass = bcrypt.compareSync(req.body.contraseña, usuario.contraseña)
                let preg = bcrypt.compareSync(req.body.respuesta, usuario.pregunta_res)
                let verdadero= pass&&preg

                if (!verdadero) {
                    return res.redirect("/home/miPerfil/edit?status=fail")
                } else if (email != null && email.email != usuario.email){
                    return res.redirect("/home/miPerfil/edit?status=email")
                } else{
                    users.update(
                        usuarioEdit, {
                        where:[{id: usuario.id}]
                    })
                    users.findOne({
                        where:[{id: req.session.user.id}]
                    })
                    req.session.user.email= req.body.email
                    req.session.user.nacimiento= req.body.nacimiento
                    req.session.user.direccion= req.body.direccion
                    req.session.user.ciudad= req.body.ciudad
                    req.session.user.cp= req.body.cp
                    req.session.user.nombre= req.body.nombre
                    req.session.user.apellido= req.body.apellido
                    req.session.user.fotoPerfil= req.body.fotoPerfil

                    return res.redirect("/home/miPerfil")
                }
            })
    },
    saludar: function(req, res){
        users.findAll()
        .then(function(usuario){
            return res.render('headerLogueado', {usuario, user: req.session.user})
        })
        .catch(function(error){
            console.log(error)
        })
    }

};
    
    module.exports = homeController