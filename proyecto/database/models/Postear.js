const Comentario = require("./Comentario");

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
        type : dataTypes.DATE,
        allowNull: true,
        },
        updated_at: {
         type : dataTypes.DATE,
        allowNull: true,
        },
        ubicacion: {
            type : dataTypes.STRING
        },
        

    }

    let config = {
       tableName : "postear",
       timestamps : false,
        //underscored:true,

    }

    const Postear = sequelize.define(alias, cols, config);
    
    Postear.associate = function(models){
        Postear.hasMany(models.Comentario, {
            foreignKey: 'post_id',
            as: 'comentario'
        }),
        Postear.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })
    }


    return Postear


}