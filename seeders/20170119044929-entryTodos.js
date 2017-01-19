'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("todos",[
      {
        taskName:"learning javascripts",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        taskName:"learning Sqlite3",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        taskName:"learning Sequelize",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        taskName:"learning ORM",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        taskName:"learning React.js",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      }
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
