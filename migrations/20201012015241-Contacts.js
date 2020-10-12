'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('contacts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      alias: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      phone: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        },
        unique: {
          args: true,
          msg: 'Este teléfono ya se encuentra registrado'
        }
      },
      imageUrl: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      contactos: {
        type: Sequelize.ARRAY(Sequelize.INTEGER), defaultValue: null
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
