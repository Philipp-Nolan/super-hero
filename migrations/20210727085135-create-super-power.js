'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('superPowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      superpower: {
        field: 'super_power',
        type: Sequelize.STRING,
      },
      heroId: {
        field: 'hero_Id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'heros',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('superPowers');
  },
};
