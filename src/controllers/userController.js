const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const {validationResult} = require('express-validator')
const bcryptjs = require("bcryptjs");

let db = require("../../database/models");
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const file = path.join(__dirname, '../data/usuarios.json');

 function getAllUsers(){
    return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function generateNewId(){
    const users = getAllUsers();
    return users.pop().id + 1;
}

function writeUser (user){
    const users = getAllUsers();
    const usersToSave= [...users, user];
    const userToJson = JSON.stringify(usersToSave, null, " ");
    fs.writeFileSync(file, userToJson);
} 

const userController = {
    registro: (req, res) => {
       res.render("registro");
    },

    store:  (req, res, next) => {

        const results = validationResult(req);
		
		if(!results.isEmpty()){	
			return res.render('registro',{
                errors:results.errors,
                old: req.body
            });
		}
            const passwordHashed = bcrypt.hashSync(req.body.password, 10);
             db.User.create({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: passwordHashed,
                avatar: req.files[0].filename,
                rol: req.body.rol,
                
    
            });
            res.redirect("/");

          },
     

    login: (req, res) => {
        res.render("login");
     },

    ingresoUsuario: (req, res) => {

        
        const validation = validationResult(req);
		
		if(!validation.isEmpty()){	
			return res.render('login',{errors:validation.errors});
		}else{
            const email= req.body.email;
            const password = req.body.password;
            const users = getAllUsers();
            
            const userExist = users.find((user) =>{
                return user.email === email;
            });

            
            

            if(userExist && bcryptjs.compareSync(password, userExist.password)) {
               
                req.session.user = userExist; 
                
                if (req.body.recordarme) {
                    res.cookie('email', userExist.email, { maxAge: 900000});
                }

                return res.redirect("/user/profile");  

            } else { 
                return res.render('login',{errors:[{msg: 'Credenciales invalidas'}]})
            }

                  
        }     

     },
    profile: (req, res) => {

        const user =  req.session.user;
       
        res.render("profile", {
            id:user.id,
            nombre:user.nombre,
            apellido: user.apellido,
            email: user.email,
            image: user.image

        });
     },

     logout: (req, res) => {
        res.clearCookie('User');
        req.session.destroy();
        res.cookie("email", null, {maxAge: -1});
        res.redirect('/');
    }

   
};

module.exports = userController