'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Calls', [
      { contactFrom: 1, contact: 2, date: new Date(), duration: 30, type: "In", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 2, contact: 3, date: new Date(), duration: 20, type: "Out", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 3, contact: 4, date: new Date(), duration: 43, type: "MissedIn", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 5, contact: 6, date: new Date(), duration: 57, type: "MissedOut", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 6, contact: 1, date: new Date(), duration: 17, type: "In", createdAt: new Date(), updatedAt: new Date() }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
