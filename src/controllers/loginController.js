const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
       res.render("login")
    },

    search: (req, res) => {
        // obtener la info del formulario.
        // filtrar en la base de datos
        // almacenar en una variable
        // renderizar la vista
    },
   
};

module.exports = controller;
