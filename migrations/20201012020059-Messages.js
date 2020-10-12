'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('messages', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      contactFrom: {
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      contact: {
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      date: {
        type: Sequelize.DATE,
        validate: {
          notEmpty: true
        }
      },
      text: {
        type: Sequelize.STRING,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
