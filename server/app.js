const express = require("express");

const port = 8080;
const app = express();

const userRoute = require("./lib/user/routes/user-route")

app.use("/api/v1/user", userRoute);

app.use(function(error, res, req){
    res.status(500).send('Something broke!');
})

app.listen(port);