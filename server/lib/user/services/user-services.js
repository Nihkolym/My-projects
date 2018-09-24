const users = require('../dummy-data/users-list')
const User = require("../user");


module.exports = class UserService{

    constructor(){

        this._users = [];

        users.forEach((el) => {
            this._users.push(new User(el));
        });
    }

    getAllUsers(){
        return this._users;
    }
}