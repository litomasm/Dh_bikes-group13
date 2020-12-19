const fs = require('fs');
const path = require('path');
const bcryptjs = require("bcryptjs");
const file = path.join(__dirname, "../data/usuarios.json");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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

const controller = {
    registro: (req, res) => {
       res.render("registro");
    },

    store: (req, res) => {
        const passwordHashed = bcryptjs.hashSync(req.body.password, 10);
        const user= {
            id: generateNewId(),
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: passwordHashed,
        }

        writeUser(user);

        res.redirect("/");
     },

    login: (req, res) => {
        res.render("login");
     },

    ingresoUsuario: (req, res) => {
        const email= req.body.email;
        const password = req.body.password;
        const users = getAllUsers();
        
        const userExist = users.find((user) =>{
            return user.email === email;
        });

        if(userExist && bcryptjs.compareSync(password, userExist.password)) {
          req.session.email = email; 
          return res.redirect("/user/profile");  
        }
         res.render("profile", {
             loginError: true
         }); 

     },
    profile: (req, res) => {

       const user =  getAllUsers().find((user)=>{
           return user.email === req.session.email;
       });
        res.render("profile", {
            nombre:user.nombre,
            apellido: user.apellido,
            email: user.email
        });
     },

   
};

module.exports = controller
