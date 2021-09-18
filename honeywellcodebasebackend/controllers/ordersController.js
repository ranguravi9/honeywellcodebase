const db = require("../models/index");
const orders = require("../models/index").orders;
var helper = require('../lib/helper');
const users = require("../models/index").users;


exports.getOrders = function (req, res) {
    orders.findAll({include:[{model:users,as:'creator',attributes:['firstName','mobile']},
            {model:users,as:'receiver',attributes:['firstName','mobile']}]})
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

exports.getOrder = function (req, res) {
    let id = req.query.id;
    orders.findOne({ where: {id:id}})
        .then(orders => {
            if (orders) {
                res.sendResponse(200, true, orders, 'User Details Retrived successfully.');
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
