module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:dataTypes.VARCHAR
        },
        price:{
            type:dataTypes.DECIMAL
        },
        category_id: {
            type:dataTypes.INTEGER
        },
        image: {
            type:dataTypes.VARCHAR
        },
        description: {
            type:dataTypes.TEXT
        },
    }

    let config = {
        tableName: "products",
        timestamps: false
    }
    let Product = sequelize.define(alias,cols,config);
    
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        });
    }
    
    return Pelicula;
}