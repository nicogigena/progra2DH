module.exports = function(sequelize, dataTypes){


    let alias = "Comentario"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        post_id: {
            type : dataTypes.INTEGER
        },
        usuario_id: {
        
            type : dataTypes.INTEGER
        },
        texto: {
            type : dataTypes.STRING
        },
        creacion: {
            type : dataTypes.INTEGER
        },

    }
    let config = {
        tableName : "comentarios",
        timestamps : false
    }

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Postear, {
        foreignKey: 'post_id',
        as: 'postear'
        }),
        Comentario.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })
        
    }   

    return Comentario


}