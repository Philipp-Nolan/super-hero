'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  };
  Hero.init({
    nickname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    real_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    origin_description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    superpowers: {
      type: DataTypes.STRING,
    },
    catch_phrase: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    images:{
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true,
  });
  return Hero;
};