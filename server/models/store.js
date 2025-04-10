"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }

  Store.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Store",
    }
  );

  return Store;
};
