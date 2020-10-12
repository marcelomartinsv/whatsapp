'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Messages', [
      { contactFrom: 1, contact: 2, date: new Date(), text: "Hola Coco, soy Pepe", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 2, contact: 3, date: new Date(), text: "Hola Pocho, soy Coco", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 3, contact: 4, date: new Date(), text: "Hola Tito, soy Pocho", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 5, contact: 6, date: new Date(), text: "Hola Pipi, soy Tito", createdAt: new Date(), updatedAt: new Date() },
      { contactFrom: 6, contact: 1, date: new Date(), text: "Hola Pepe, soy Pepo", createdAt: new Date(), updatedAt: new Date() }
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
