'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Contacts', [
      { name: "pepe", alias: "elPepeDeLaGente", number: 123455661, imageUrl: "pepe.jpg", contactos: [2, 3, 4, 5, 6], createdAt: new Date(), updatedAt: new Date() },
      { name: "coco", alias: "elCocoDeLaGente", number: 123455662, imageUrl: "coco.jpg", contactos: [1, 3, 4, 5, 6], createdAt: new Date(), updatedAt: new Date() },
      { name: "pocho", alias: "elPochoDeLaGente", number: 123455663, imageUrl: "pocho.jpg", contactos: [1, 2, 4, 5, 6], createdAt: new Date(), updatedAt: new Date() },
      { name: "tito", alias: "elTitoDeLaGente", number: 123455664, imageUrl: "tito.jpg", contactos: [1, 2, 3, 5, 6], createdAt: new Date(), updatedAt: new Date() },
      { name: "pipi", alias: "elPipiDeLaGente", number: 123455665, imageUrl: "pipi.jpg", contactos: [1, 2, 3, 4, 6], createdAt: new Date(), updatedAt: new Date() },
      { name: "pepo", alias: "elPepoDeLaGente", number: 123455666, imageUrl: "pepo.jpg", contactos: [1, 2, 3, 4, 5], createdAt: new Date(), updatedAt: new Date() }
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
