const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {

        let user={};
        if(req.session.user){
            user = req.session.user;
        }
        
        if(user == undefined){
            res.render("index.ejs")
        } else{
            res.render("index.ejs",{id:user.id})
        }
       
      
    },
    search: (req, res) => {
        // obtener la info del formulario.
        // filtrar en la base de datos
        // almacenar en una variable
        // renderizar la vista
    },

    contacto: (req, res) => {
       res.render("comercial/contacto")
    },
};

module.exports = controller;
