'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('calls', {
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
      durationInSeconds: {
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      type: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      }
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
