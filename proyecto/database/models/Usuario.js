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
        }
    }
    let config = {
        tableName : "usuarios",
        timestamps : false
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
        })
    }

    return Usuario


}