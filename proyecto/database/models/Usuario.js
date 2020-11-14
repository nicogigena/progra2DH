module.exports = function(sequelize, dataTypes){


    let alias = "Usuario"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        email: {
            allowNull : false,
            type : dataTypes.STRING
        },
        contraseña: {
            allowNull : false,
            type : dataTypes.STRING
        },
        nacimiento: {
            type : dataTypes.DATE
        },
        direccion: {
            type : dataTypes.STRING
        },
        ciudad: {
            type : dataTypes.STRING
        },
        cp: {
            type : dataTypes.INTEGER
        },
        nombre: {
            allowNull : false,
            type : dataTypes.STRING
        },
        apellido: {
            allowNull : false,
            type : dataTypes.STRING
        },
        fotoPerfil: {
            type : dataTypes.STRING
        },
        seguidos: {
            type : dataTypes.INTEGER
        },
        seguidores: {
            type : dataTypes.INTEGER
        },
        posts: {
            type : dataTypes.INTEGER
        },
        pregunta_id: {
            type : dataTypes.INTEGER
        },
        pregunta_res: {
            type : dataTypes.STRING
        },     
       created_at: {
           type : dataTypes.DATE,
            allowNull: true,
        },
    }
    let config = {
        tableName : "usuarios",
        //underscored:true,
       // timestamps : false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Postear, {
            foreignKey: 'usuario_id',
            as: 'postear'
        }),
        Usuario.hasMany(models.Comentario, {
            foreignKey: 'usuario_id',
            as: 'comentario'
        }),
        Usuario.belongsTo(models.Pregunta, {
            foreignKey: 'pregunta_id',
            as: 'pregunta'
        })
    }

    return Usuario


}