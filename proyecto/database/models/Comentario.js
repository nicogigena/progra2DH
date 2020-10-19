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
    return Comentario


}