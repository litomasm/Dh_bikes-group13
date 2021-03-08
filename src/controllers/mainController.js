const fs = require('fs');
const path = require('path');
let db = require("../../database/models");
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {

        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            let pedidoProducto =  db.Product.findAll();
            let pedidoCategory =  db.Category.findAll();

            Promise.all([pedidoProducto, pedidoCategory])
            .then(function([product, categories]){
                res.render("index", {products:product, categories: categories,id:user.id})
            })
           
        } else{
            let pedidoProducto =  db.Product.findAll();
            let pedidoCategory =  db.Category.findAll();

            Promise.all([pedidoProducto, pedidoCategory])
            .then(function([products, categories]){
                res.render("index", {id:user.id,products:products, categories: categories,id:user.id})
            })
        }
       
      
    },
    search: (req, res) => {
        // obtener la info del formulario.
        // filtrar en la base de datos
        // almacenar en una variable
        // renderizar la vista
    },

    contacto: (req, res) => {
        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            res.render("comercial/contacto")
        } else{
            res.render("comercial/contacto",{id:user.id})
        }
    },
};

module.exports = controller;
