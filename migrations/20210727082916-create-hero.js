'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: Sequelize.STRING,
      },
      originDescription: {
        field: 'origin_description',
        type: Sequelize.STRING,
      },
      superPowers: {
        field: 'super_powers',
        type: Sequelize.STRING,
      },
      catchPhrase: {
        field: 'catch_phrase',
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('heros');
  },
};
