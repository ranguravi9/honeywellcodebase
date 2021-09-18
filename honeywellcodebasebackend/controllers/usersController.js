let bcrypt = require('bcrypt');

const db = require("../models/index");
const users = require("../models/index").users;
let jwt = require('jsonwebtoken');
const config = require('../config/configuration');

exports.loginUser = function (req, res) {
    let email = req.body.email;
    let pwd = req.body.password;
    return users.findOne({where: {email: email, isActive: 1}}).then(userInstance => {
        if (userInstance) {
            bcrypt.compare(pwd, userInstance.password, function (err, isMatch) {
                if (err) return cb(err);
                if (isMatch) {
                    let data = {}
                    data.user = {
                        "id": userInstance.id,
                        "name": userInstance.firstName + ' ' + userInstance.lastName,
                        "email": userInstance.email,
                        "userType": userInstance.userType
                    };
                    data.token = jwt.sign({
                        mobile: userInstance.mobile,
                        id: userInstance.id,
                        email: userInstance.email
                    }, config.secret, {expiresIn: config.tokenExpiry});
                    res.sendResponse(200, true, data, 'Authentication Successful!');
                } else {
                    res.sendResponse(400, false, '', 'Authentication failed. Wrong password.');
                }
            });
        } else {
            res.sendResponse(200, false, null, 'Invalid User Details, Please Contact Adminstrator');
        }
    });
}
exports.getUsers = function (req, res) {
    users.findAll()
        .then(user_data => {
            if (user_data) {
                res.sendResponse(200, true, user_data, 'User Details Retrived successfully.');
            } else {
                throw new Error("Error Occured while saving");
            }

        }).catch(err => {
        res.sendResponse(500, false, null, err.toString());
    })

}
exports.getUserDetails = function (req, res) {
    adminUsers.findOne({where: req.query})
        .then(user_data => {
            if (user_data) {
                res.sendResponse(200, true, user_data, 'User Details Retrived successfully.');
            } else {
                throw new Error("Error Occured while saving");
            }

        }).catch(err => {
        res.sendResponse(500, false, null, err.toString());
    })
}

function customError(error) {
    if (error && error.errors && error.name == "SequelizeUniqueConstraintError") {
        var errorMessage = "";
        error.errors.forEach(element => {
            errorMessage += element.message;
        });
        return errorMessage;
    }
    return error;

}
