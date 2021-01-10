module.exports = function(sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:dataTypes.VARCHAR
        },
        last_name:{
            type:dataTypes.VARCHAR
        },
        email: {
            type:dataTypes.VARCHAR
        },
        password: {
            type:dataTypes.VARCHAR
        },
        avatar: {
            type:dataTypes.VARCHAR
        },
        rol: {
            type:dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }
    let User = sequelize.define(alias,cols,config);
    return User;
}