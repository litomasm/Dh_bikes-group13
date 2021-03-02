const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator')
const bcryptjs = require("bcryptjs");


let db = require("../../database/models");
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const file = path.join(__dirname, '../data/usuarios.json');

/* function getAllUsers(){
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
} */

const userController = {
    registro: (req, res) => {
       res.render("registro");
    },

    store:  async (req, res) => {
        console.log("1")
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            console.log("2")
            res.render('registro', {errors: errors.errors});
        } else {
        
        await db.User.create({
			name: req.body.name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 5),
			/* avatar: req.files[0].filename, */
            avatar: req.files[0] ? req.files[0].filename : '',
            
        }).catch(error => console.log(error));
        
            console.log({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 5),
                /* avatar: req.files[0].filename, */
                avatar: req.files[0] ? req.files[0].filename : '',
            })
        res.render("login");
        }
    },

    login: (req, res) => {
        res.render("login");
     },

    ingresoUsuario: async (req, res) => {

        const validation = validationResult(req);
		
		if(!validation.isEmpty()){	
			return res.render('login',{errors:validation.errors});
		}else{
            
            const user = await db.User.findOne({
                where:{
                    email:req.body.email,
                }
            })

            const formPassword = req.body.password;

         
            if(user && bcryptjs.compareSync(formPassword, user.password)){
                
                
                req.session.user = user.dataValues; 
                console.log('session: ',req.session.user)
                
                if (req.body.recordarme) {
                    res.cookie('email', user.email, { maxAge: 900000});
                }

                return res.redirect("/user/profile");  

            } else { 
                return res.render('login',{errors:[{msg: 'Credenciales invalidas'}]})
            }
            

            //Estas lineas son para trabajar con el JSON
            /*
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
            */
                  
        }     
        

     },
    profile: (req, res) => {

        const user =  req.session.user;
       
        res.render("profile", {
            id:user.id,
            nombre:user.name,
            apellido: user.last_name,
            email: user.email,
            image: user.avatar

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