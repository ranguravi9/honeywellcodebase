const userController = require('../controllers/usersController');
const validator = require('express-joi-validation').createValidator({passError: true});
const validationSchema = require('../validationSchemas/userValidationSchema');

exports.routes = function(app){
    app.post('/login',validator.body(validationSchema.loginSchema),userController.loginUser);
    app.get('/get-users',userController.getUsers);
    app.get('/get-user-details/:id',userController.getUserDetails);

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