'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Todos', [{
      task_name: 'makan',
      complete_status: 0,
      tag: 'makan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task_name: 'mandi',
      complete_status: 0,
      tag: 'mandi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task_name: 'tidur',
      complete_status: 0,
      tag: 'tidur',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task_name: 'coding',
      complete_status: 0,
      tag: 'coding',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
