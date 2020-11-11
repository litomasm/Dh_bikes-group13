const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


    

/*
function getAllProducts() {
    const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

function generateNewId() {
    const products = getAllProducts();
    return products.pop().id + 1;
}*/

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render('producto');
    },

    /* Detail - Detail from one product
    detail: (req, res) => {
        const id = req.params.id;
        const result = getAllProducts().find((product) => {
            return product.id == id
        })

        res.render('producto.ejs', {
            product: result
        })
    },*/

    // Create - Form to create
    create: (req, res) => {
        res.render('productoCreate.ejs');
    },


/*
    // Create -  Method to store
    store: (req, res, next) => {
        /*
            1) con req.body, obtenemos los inputs del formulario.
            2) los guardamos en una variable en forma de objeto literal.
            3) leo la base de productos. parseandola a objeto. Output: es un array con todos los objetos.
            4) agregar el objeto del punto 2 al array de productos.
            5) escribimos de nuevo todo el archivo json (base de datos) con el nuevo array (stringifiqueado) que tiene el objeto nuevo.
        
        const image = req.files[0].filename;
        const newProduct = {
            id: generateNewId(),
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description,
            image: image
        }

        const products = getAllProducts();
        const productosAGuardar = [...products, newProduct];
        const productToStringify = JSON.stringify(productosAGuardar, null, ' ');
        fs.writeFileSync('./src/data/productos.json', productToStringify);

        res.redirect('/');
    },
*/
    // Update - Form to edit
    edit: (req, res) => {
        res.render('producto.ejs');
    },
/*
    // Update - Method to update
    update: (req, res) => {
        // Do the magic
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        // Do the magic
    }*/
};

module.exports= controller; 