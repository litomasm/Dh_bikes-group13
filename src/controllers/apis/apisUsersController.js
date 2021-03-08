
const db = require('../../../database/models');
const bcrypt = require('bcryptjs');

const apiUsersController = {
	/* list: function(req, res){
        db.User.findAll({
            
        })
        .then(function(users){
            for(let i = 0; i <users.length; i++){
                users[i].setDataValue("endpoint", "/api/users/" + users[i].id)
            }
            let respuest = {
                meta:{
                    status: 200,
                    total: users.length

                },
                data: users
            };
            res.json(respuest);
        })
        },*/

        list: async (req, res) => {
            const page = Number(req.query.page) || 1;
            const Allusers = await db.User.findAndCountAll({
                include: [{
                    all: true,
                    nested:true
                }],
                order:[
                    ["id"]
                ],
                limit: 5,
                offset: 5 * (page - 1)
            });
        
            const totalPages = Math.ceil(Allusers.count / 5)
            const users = Allusers.rows.map(user => {
                    return(
                    user.dataValues.urlImage = `http://localhost:3030/images/users/${user.image}`,
                    user.dataValues.urlDetail = `http://localhost:3030/api/users/${user.id}`,
                    user
                )
            });      
           
            
            res.json({
                data:{
                    users
                    }
                ,
                meta:{
                    status:"success",
                    count: Allusers.count,                    
                    previousPage: page > 1 ? `http://localhost:3030/api/users?page=${page - 1}`: null,
                    currentePage: `http://localhost:3030/api/users?page=${page}`,
                    nextPage: page < page < totalPages ? `http://localhost:3030/api/users?page=${page + 1}` : null,
                    totalPages: totalPages
                },
                
                    
                
            });
        },

        find: function (req, res) {
            db.User.findByPk(req.params.id)
                .then(function(user){
                    res.json(user);
                })                
                
            },

         store:function (req, res) {
             db.User.create({
                name: req.body.name,
			    last_name: req.body.last_name,
			    email: req.body.email,
			    password: bcryptjs.hashSync(req.body.password, 5),
			    /*avatar: req.files[0] ? req.files[0].filename : '',*/
             });
             res.json({
                 status: 200
             });
         }
    };      
      



module.exports = apiUsersController;