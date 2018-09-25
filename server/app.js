const express = require("express");
const DBService = require("./lib/db/services/db-service")

const port = 8080;
const app = express();

const userRoute = require("./lib/user/routes/user-route")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use("/api/v1/user", userRoute);

app.use(function(error, res, req){
    res.status(500).send('Something broke!');
})

const initApp = async () => {
    try {
        await DBService.initDataBase();

        app.listen(port);
    }

    catch(err) {
        console.log(err);
    }
}

initApp();