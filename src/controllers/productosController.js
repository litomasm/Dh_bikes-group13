
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
const {check, validationResult, body} = require('express-validator')

 const productosController  = {
    // Root - Show all products
    list: (req, res, next) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            db.Product.findAll().then((products)=>{
                res.render("allProducts", {products})
            })
        } else{
            db.Product.findAll().then((products)=>{
                res.render("allProducts", {products,id:user.id})
            })
        }

           //CHECKEAR ESTE CODIGO PARA COMPRENDER 
        /*--------------   --------------*/
        // if(req.session.user){
        //     db.Product.findAll().then((products)=>{
        //         res.render("allProducts", {products,id:req.session.user.id})})
        // } else{
        //     db.Product.findAll().then((products)=>{
        //         res.render("allProducts", {products})})
        // }
        /*--------------   --------------*/
    },

    
    detail: async (req, res) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            const id = req.params.id;
            const product = await db.Product.findByPk(id, {
                include: ["category"]
            })
            const products = await db.Product.findAll()
            
            res.render("producto", {product,products});
        } else {
            const id = req.params.id;
            const product = await db.Product.findByPk(id, {
                include: ["category"]
            })
            const products = await db.Product.findAll()
            
            res.render("producto", {product,id:user.id,products});
        }
    },

    search: async function (req, res){
        const userSearch = req.body.name;
        const searchedProduct = await db.Product.findAll(userSearch)

        res.render('busqueda', {
            searchedProduct
        });
        
    },
    
      filter: async function (req,res,next){
        const productList = await db.Product.findAll({
          include: ['categories']
        },
        {where: {
            [Op.and]: [
              { category_id: req.query.category_id},
              
            ]
          }
        });
      const categories = await db.Categorie.findAll()
      const rooms = await db.Room.findAll()
      const benefits = await db.Benefit.findAll()
      return res.render('products/list',	{products:productList, categories:categories})
      },

    // Create - Form to create
    crear: (req, res, next) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            res.render('productoCreate');
        } else{
                db.Category.findAll()
                .then(function(categories){
                    return res.render("productoCreate", {id:user.id,categories : categories});
                }
            )}
       
    },


    guardado: async (req, res, next) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()){
                     
            let user={};
            if(req.session.user){
                user = req.session.user;
            }
            
            if(user == undefined){
                let categories = await db.Category.findAll()
                return res.render("productoCreate", {categories : categories, errors: errors.errors});
            } else{
                let categories = await db.Category.findAll()
                return res.render("productoCreate", {id: user.id,categories : categories, errors: errors.errors});
            }
        } else {



        const newProduct={ 
            name: req.body.name,
            price: req.body.price,
            category_id: req.body.category,
            image: req.files[0].filename,
            description: req.body.description,
            information: req.body.information,
        };
        await db.Product.create(newProduct);
        
        res.redirect("/producto/");
    }
},

        
    // Update - Form to edit
    editar: (req, res, next) => {

        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            res.redirect('allProducts')
        } else{
            
            let pedidoProducto =  db.Product.findByPk(req.params.id);
            let pedidoCategory =  db.Category.findAll();

            Promise.all([pedidoProducto, pedidoCategory])
            .then(function([product, categories]){

            res.render("productoEdit", {product:product, categories: categories,id:user.id})
        })
        }
        
    },

    
    actualizar: async (req, res) => {

       const id = req.params.id; 
        const product = db.Product.findByPk(id);
        let errors = validationResult(req);
        if (!errors.isEmpty()){

            let user={};
            user = req.session.user;
            let pedidoProducto =  db.Product.findByPk(req.params.id);
            let pedidoCategory =  db.Category.findAll();

            Promise.all([pedidoProducto, pedidoCategory])
            .then(function([product, categories]){
                res.render('productoEdit', {id:user.id,product: product, categories: categories, errors: errors.errors});
            });

        } else {
            console.log('viendo que tiene: ', req.files[0] , + 'imagen de productos: ', product.image)
            await db.Product.update({
                name: req.body.name,
                price: req.body.price,
                category_id:req.body.category,
                image: req.files[0] ? req.files[0].filename : product.image,
                description: req.body.description,
                information: req.body.information,
            }, {
                where:{
                    id:req.params.id
                }

            })
            res.redirect("/producto/")
        }
		
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