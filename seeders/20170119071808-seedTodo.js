'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("todos",[
      {
        task:"Makan Pagi",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        task:"Makan Siang",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        task:"Makan Malam",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },

    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
