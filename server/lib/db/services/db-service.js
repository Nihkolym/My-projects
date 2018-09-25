const db = require('../db');
const User = require('../../user/user');

module.exports = class DBService{
    static async initDataBase(){
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
                
            await db.sync()
        }

        catch(err) {
            console.log(err);
        }
    }
}