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

    return queryInterface.bulkInsert('Todos',[{
      task: 'BANGUN PAGI',
      complete: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'CUCI MUKA',
      complete: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'MENGGOSOK GIGI',
      complete: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'POOP !',
      complete: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
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
