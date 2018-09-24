const express = require('express');
const createService = require("../services/user-services");
const router = express.Router();

const userService = new createService();

router.get('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(userService.getAllUsers());
    console.log(userService.getAllUsers());
});

module.exports = router;
