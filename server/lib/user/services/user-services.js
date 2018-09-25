const User = require("../user");


module.exports = class UserService{

    constructor(){

    }

    getAllUsers(){
        return User.findAll();
    }
}