const createService = require("../services/user-services");

const userService = new createService();

module.exports = class UserController{
    static async getAllUsers(req, res){

        let users = [];

        await userService.getAllUsers().then(data => {

            data.forEach(element => {
                users.push(element.dataValues);
            });

        });

        res.send(users);
        console.log(users);
    }
}