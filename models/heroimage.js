"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HeroImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HeroImage.init(
    {
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "HeroImage",
    }
  );
  return HeroImage;
};
