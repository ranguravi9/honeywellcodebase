'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        orders.belongsTo(models.users,{foreignKey:'createdBy',as:'creator'});
        orders.belongsTo(models.users,{foreignKey:'pickedBy',as:'receiver'});
    }
  };
  orders.init({
    createdLatitude: DataTypes.STRING,
    createdLongitude: DataTypes.STRING,
    orderLatitude: DataTypes.STRING,
    orderLongitude: DataTypes.STRING,
    orderStatus: DataTypes.STRING,
    createdBy: DataTypes.NUMBER,
    pickedBy: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};