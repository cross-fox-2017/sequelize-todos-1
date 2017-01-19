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
    return queryInterface.bulkInsert('Todos',
    [{
      task: 'Pesen Mami',
      completed: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task: 'Solat',
      completed: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task: 'Maminya ga ada kehabisan',
      completed: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task: 'Makan pecel di depan',
      completed: 0,
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
    return queryInterface.bulkDelete('Todos', null);
  }
};
