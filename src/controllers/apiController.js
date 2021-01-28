const {validationResult} = require('express-validator')
const {User} = require("../../database/models");
const bcryptjs = require("bcryptjs");

module.exports = {
    async list(){
        const users = await users.findAll({
            attributes: ["email"]
        })
        resizeBy.json(users)
    }
};