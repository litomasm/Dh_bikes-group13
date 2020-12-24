const fs = require('fs');
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
}

const controller = {
    // Root - Show all products
    index: (req, res) => {
        
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            const products = getAllProducts();
            return res.render('allProducts', {products: products});
        } else{
            const products = getAllProducts();
            return res.render('allProducts', {products: products, id:user.id});
        }
       
    },

    
    detail: (req, res) => {

        let user={};
        if(req.session.user){
            user = req.session.user;
        }
       
        if(user == undefined){
            const id = req.params.id;
            const result = getAllProducts().find((product) => {
                return product.id == id
            })
    
            res.render('producto', {
                product: result
            })
        } else{
            const id = req.params.id;
            const result = getAllProducts().find((product) => {
                return product.id == id
            })
    
            res.render('producto', {
                product: result,
                id:user.id
            })
        }
       
    },

    // Create - Form to create
    create: (req, res) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            res.render('productoCreate');
        } else{
            res.render('productoCreate',{id:user.id});
        }
       
    },


    store: (req, res, next) => {
        
        const image = req.files[0].filename;
        const newProduct = {
            id: generateNewId(),
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            info: req.body.info,
            image: image
        }

        const products = getAllProducts();
        const productosAGuardar = [...products, newProduct];
        const productToStringify = JSON.stringify(productosAGuardar, null, ' ');
        fs.writeFileSync('./src/data/productos.json', productToStringify);

        res.redirect('/');
    },

    // Update - Form to edit
    edit: (req, res) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            const products = getAllProducts();
            const id = req.params.id;
            const result = products.find((product) => product.id == id);

	    	res.render('productoEdit', {
			productToEdit: result
		    })
        } else{
            const products = getAllProducts();
            const id = req.params.id;
            const result = products.find((product) => product.id == id);

	    	res.render('productoEdit', {
            productToEdit: result,
            id:user.id
		    })
        }
        
    },

    
    update: (req, res) => {
		
		const products = getAllProducts();

		const id = req.params.id;
		
		const newProducts = products.map((product) => {

			if(id == product.id){
				product.name = req.body.name;
				product.price = req.body.price;
				product.category = req.body.category;
                product.description = req.body.description;
                product.info = req.body.info;
				product.image = req.files[0] ? req.files[0].filename : product.image;
			}

			return product;
		});

		writeProducts(newProducts);

		res.redirect("/producto/detail/" + id);
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		
        
        const idProduct = req.params.id;
        const products = getAllProducts();

        const listProductUpdate = products.filter((product) =>{
            if(product.id!=idProduct){
                return product;
            }
        })

        writeProducts(listProductUpdate);

        res.redirect('/producto')


	}
};

module.exports= controller; 