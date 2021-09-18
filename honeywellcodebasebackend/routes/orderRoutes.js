const ordersController = require('../controllers/ordersController');
const validator = require('express-joi-validation').createValidator({passError: true});

exports.routes = function(app){
    app.get('/orders',ordersController.getOrders);
    app.get('/get-order',ordersController.getOrder);

    app.use((err, req, res, next) => {
        if (err && err.error && err.error.isJoi) {
            // we had a joi error, let's return a custom 400 json response
            res.sendResponse(400,false,null,err.error.toString());
        } else {
            // pass on to another error handler
            next(err);
        }
    });
}