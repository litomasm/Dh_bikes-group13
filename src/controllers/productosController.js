
/* const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsFilePath = path.resolve(__dirname, '../data/productos.json');

function getAllProducts(){

	const jsonProducts = fs.readFileSync(productsFilePath, 'utf-8');

	const productsParsed = JSON.parse(jsonProducts);

	return productsParsed;
}

function writeProducts(arrayToTransform) {
	const productsJson = JSON.stringify(arrayToTransform, null, " ");
	fs.writeFileSync(productsFilePath, productsJson);
}

function generateNewId(){
	const products = getAllProducts();
	return products.pop().id + 1;
} */

let db = require("../../database/models");
const { Op } = require("sequelize");

 const productosController  = {
    // Root - Show all products
    list: (req, res, next) => {
        db.Product.findAll().then((products)=>{
            res.render("allProducts", {products})
        })
    },

    
    detail: async (req, res) => {
        const id = req.params.id;
        const product = await db.Product.findByPk(id, {
            include: [{association:"category"}]
        })
        
        res.render("producto", {product});
    },

    search: async function (req,res,next){
        let query = req.query.search_query;
        const productList = await db.Product.findAll({
          where: {name : {[Op.like]: '%'+query+'%'}}
        },{
          include: ['categorys']
        });
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        return res.render('products/list',{products:productList,categories:categories})
      }
      ,
      filter: async function (req,res,next){
        const productList = await db.Product.findAll({
          include: ['categorys']
        },
        {where: {
            [Op.and]: [
              { category_id: req.query.category_id},
              
            ]
          }
        });
      const categories = await db.Category.findAll()
      const rooms = await db.Room.findAll()
      const benefits = await db.Benefit.findAll()
      return res.render('products/list',	{products:productList, categories:categories})
      },

    // Create - Form to create
    crear: (req, res) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            res.render('productoCreate');
        } else{
                db.Category.findAll()
                .then(function(categorys){
                    return res.render("productoCreate", {categorys : categorys});
                }
                )}
       
    },


    guardado: async (req, res, next) => {
        
        await db.Product.create({
            name: req.body.name,
            price: req.body.price,
            category_id: req.body.category,
            image: req.files[0].filename,
            description: req.body.description,
            information: req.body.information,

        });
        res.redirect("/producto/")
      

        
    },

    // Update - Form to edit
    editar: (req, res, next) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            res.render('productoEdit')
        } else{
            let pedidoProducto =  db.Product.findByPk(req.params.id);
            let pedidoCategory =  db.Category.findAll();

            Promise.all([pedidoProducto, pedidoCategory])
            .then(function([product, categorys]){

            res.render("productoEdit", {product:product, categorys: categorys})
        })
        }
        
    },

    
    actualizar: (req, res) => {
        db.Product.update({
            name: req.body.name,
            price: req.body.price,
            category_id: req.body.category,
            image: req.files[0] ? req.files[0].filename : product.image,
            description: req.body.description,
            information: req.body.information,
        }, {
            where:{
                id:req.params.id
            }

        })

        if (typeof req.files[0] !== 'undefined'){
            db.Product.update({
            image: req.files[0].filename},
            {where:{id:req.params.id}}
            )
          }

       
        res.redirect("/producto/")
		
	},

	// Delete - Delete one product from DB
	borrar: (req, res) => {
		
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        })

        res.redirect("/producto/");
}
}; 

module.exports= productosController; 