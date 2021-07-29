'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.hasMany(models.SuperPower, {
        foreignKey: 'heroId',
      });
      Hero.hasMany(models.HeroImage, {
        foreignKey: 'id',
      });
    }
  }
  Hero.init(
    {
      nickname: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        field: 'origin_description',
        type: DataTypes.STRING,
      },
      superPowers: {
        field: 'super_powers',
        type: DataTypes.STRING,
      },
      catchPhrase: {
        field: 'catch_phrase',
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Hero',
      underscored: true,
    },
  );
  return Hero;
};
