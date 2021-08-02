'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HeroImage.belongsTo(models.Hero, {
        foreignKey: 'heroId',
      });
    }
  }
  HeroImage.init(
    {
      heroId: {
        field: 'hero_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      imagePath: {
        field: 'image_path',
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'HeroImage',
      tableName: 'heroImages',
      underscored: true,
    },
  );
  return HeroImage;
};
