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
        const products = getAllProducts();

		res.render('allProducts', {products: products});
    },

    
    detail: (req, res) => {
        const id = req.params.id;
        const result = getAllProducts().find((product) => {
            return product.id == id
        })

        res.render('producto.ejs', {
            product: result
        })
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('productoCreate.ejs');
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
        const products = getAllProducts();
		const id = req.params.id;
		const result = products.find((product) => product.id == id);

		res.render('productoEdit', {
			productToEdit: result
		})
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
		// product.destroy(req.params.id);
        // return res.redirect('/');
        
        const idProduct = req.params.id;
        const products = getAllProducts();

        const listProductUpdate = products.filter((product) =>{
            if(product.id!=idProduct){
                return product;
            }
        })

        writeProducts(listProductUpdate);

        res.redirect('/')


	}
};

module.exports= controller; 