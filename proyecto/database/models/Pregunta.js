module.exports = function(sequelize, dataTypes){


    let alias = "Pregunta"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        pregunta: {
            allowNull : false,
            type : dataTypes.STRING
        },
    }
    let config = {
        tableName : "preguntas",
        timestamps : false
    }

    const Pregunta = sequelize.define(alias, cols, config);

    Pregunta.associate = function(models){
        Pregunta.hasMany(models.Usuario, {
            foreignKey: 'pregunta_id',
            as: 'usuario'
        })
    }

    return Pregunta


}