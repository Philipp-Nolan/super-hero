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
      Hero.hasMany(models.HeroImage, {
        foreignKey: 'heroId',
        onDelete: 'cascade',
      });

      Hero.belongsToMany(models.Superpower, {
        through: 'heroes_to_superpowers',
        foreignKey: 'heroId',
      });
    }
  }
  Hero.init(
    {
      nickName: {
        field: 'nick_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        field: 'origin_description',
        type: DataTypes.STRING(512),
        allowNull: true,
      },
      catchPhrase: {
        field: 'catch_phrase',
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
      modelName: 'Hero',
      tableName: 'heros',
      underscored: true,
    },
  );
  return Hero;
};
