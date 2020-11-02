module.exports = function(sequelize, dataTypes){


    let alias = "Postear"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        usuario_id: {
            type : dataTypes.INTEGER
        },
        url: {
        
            type : dataTypes.STRING
        },
        descripcion: {
            type : dataTypes.STRING
        },
        creacion: {
            type : dataTypes.INTEGER
        },
        ubicacion: {
            type : dataTypes.STRING
        },
        

    }
    let config = {
       tableName : "postear",
        timestamps : false
    }

    const Postear = sequelize.define(alias, cols, config);
    return Postear;


}