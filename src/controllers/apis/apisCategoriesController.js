const { reset } = require('nodemon');
const db = require('../../../database/models');


const apisCategoriesController = {

    list: async (req, res) => {
        const AllCategories = await db.Category.findAll({
            
            order:[
                ["id"]
            ],
            
        });            

        const categories = AllCategories.map(category => {
            return(
                
            category
        )
    });

    const ninos = categories.filter((category)=>{
        return category.id == 1;
    });    
    const adultos = categories.filter((category)=>{
        return category.id == 2;
    });    
    const seguros = categories.filter((category)=>{
        return category.id == 5;
    });        
    
    const deportes = categories.filter((category)=>{
        return category.id == 3;
    });

    const accesorios = categories.filter((category)=>{
        return category.id == 4;
    });


        res.json({
            data:{
                categories
            }, 
            meta:{
                
                Category_Ninos: ninos,
            }
            
        });
    }
};     

module.exports = apisCategoriesController;