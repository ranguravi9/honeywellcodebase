const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
// var moment = require('moment');
// var path = require('path');
var morgan = require('morgan');
// var fs = require('fs');

const env = process.env.NODE_ENV || 'development';

var userRoutes = require("./routes/userRoutes");
var orderRoutes = require("./routes/orderRoutes");

const app = express()
const port = process.env.PORT || 3000;
const router = express.Router()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.response.sendResponse = function (statusCode, success, data, message) {
    var obj = {"success": success, "data": data, message: message};
    return this.contentType("application/json").status(statusCode).send(obj);
}

app.use(bodyParser.json());
app.use('/api', router);

userRoutes.routes(app);
orderRoutes.routes(app);

app.all('*', function (req, res, next) {
    res.header('X-Frame-Options', 'DENY');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Content-Length', '52250');
    res.header('X-XSS-Protection', '1');
    // res.header('Content-Type', 'application/json; charset=utf-8');
    res.header('Cache-Control', 'no-cache');
    next();
});
app.use(cors());

// setup the logger for all http requests.
app.use(morgan('combined'));


//catch any uncaught exceptions while execution.
process.on('uncaughtException', function (err) {
    console.log(err.stack);
});

app.get('/', (req, res) => res.send('Api Started Successfully'));

app.use(function (err, req, res, next) {
    res.status(500).send({"Error": err.stack});
});

app.listen(port, () => console.log(`API listening on port ${port}! and running in ${env} mode !!`));

