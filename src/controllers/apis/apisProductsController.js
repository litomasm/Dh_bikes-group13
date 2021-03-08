const { reset } = require('nodemon');
const db = require('../../../database/models');


const apiProductsController = {
	/*list: function(req, res){
        db.Product.findAll({
            include: ["category"]
        })
        .then(function(products){
            for(let i = 0; i <products.length; i++){
                products[i].setDataValue("endpoint", "/api/products/" + products[i].id)
            }
            let respuest = {
                meta:{
                    status: 200,
                    total: products.length

                },
                data: products
            };
            res.json(respuest);
        })
        },*/
        list: async (req, res) => {
            
            const Allproducts = await db.Product.findAndCountAll({
                include: [{
                    all: true,
                    nested:true
                }],
                order:[
                    ["id"]
                ],
                
            });
        
            
            const products = Allproducts.rows.map(product => {
                    return(
                    product.dataValues.urlImage = `http://localhost:3030/images/products/${product.image}`,
                    product.dataValues.urlDetail = `http://localhost:3030/api/products/${product.id}`,
                    product
                )
            });
        
            const ninos = products.filter((product)=>{
                return product.category.id == 1;
            });    
            const adultos = products.filter((product)=>{
                return product.category.id == 2;
            });    
            const seguros = products.filter((product)=>{
                return product.category.id == 5;
            });        
            
            const deportes = products.filter((product)=>{
                return product.category.id == 3;
            });

            const accesorios = products.filter((product)=>{
                return product.category.id == 4;
            });

            const totalAmount = Allproducts.rows.reduce((acum, current) => {
                return acum += Number(current.price)
            }, 0);

            res.json({
                data:{
                    products
                    
                }
                ,
                meta:{
                    status:"success",
                    count: Allproducts.count,
                    count_Category_Ninos: ninos.length,
                    count_Category_Adultos: adultos.length,
                    count_Category_Seguros: seguros.length,
                    count_Category_Deportes: deportes.length,
                    count_Category_Accesorios: accesorios.length,
                    totalAmount: totalAmount,
                    
                }
                
            });
        },

        paginado: async (req, res) => {
            const page = Number(req.query.page) || 1;
            const Allproducts = await db.Product.findAndCountAll({
                include: [{
                    all: true,
                    nested:true
                }],
                order:[
                    ["id"]
                ],
                limit: 6,
                offset: 5 * (page - 1)
            });
        
            const totalPages = Math.ceil(Allproducts.count / 5)
            const products = Allproducts.rows.map(product => {
                    return(
                    product.dataValues.urlImage = `http://localhost:3030/images/products/${product.image}`,
                    product.dataValues.urlDetail = `http://localhost:3030/api/products/${product.id}`,
                    product
                )
            });
        
            const ninos = products.filter((product)=>{
                return product.category.id == 1;
            });    
            const adultos = products.filter((product)=>{
                return product.category.id == 2;
            });    
            const seguros = products.filter((product)=>{
                return product.category.id == 5;
            });        
            
            const deportes = products.filter((product)=>{
                return product.category.id == 3;
            });

            const accesorios = products.filter((product)=>{
                return product.category.id == 4;
            });

            res.json({
                
                    products
                ,
                meta:{
                    status:"success",
                    count: Allproducts.count,
                    count_Category_Ninos: ninos.length,
                    count_Category_Adultos: adultos.length,
                    count_Category_Seguros: seguros.length,
                    count_Category_Deportes: deportes.length,
                    count_Category_Accesorios: accesorios.length,
                    previousPage: page > 1 ? `http://localhost:3030/api/products?page=${page - 1}`: null,
                    currentePage: `http://localhost:3030/api/products?page=${page}`,
                    nextPage: page < page < totalPages ? `http://localhost:3030/api/products?page=${page + 1}` : null,
                    totalPages: totalPages 
                }
                
            });
        },
        find: function (req, res) {
           

            db.Product.findByPk(req.params.id)
                .then(function(product){
                  
                    res.json(product);
                })                
                
            },

           store:function (req, res) {
             db.Product.create({
                name: req.body.name,
                price: req.body.price,
                category_id: req.body.category,
                image: req.files[0].filename,
                description: req.body.description,
                information: req.body.information
             });
             res.json({
                 status: 200
             });
         },

    
            
        

        }
module.exports = apiProductsController;


