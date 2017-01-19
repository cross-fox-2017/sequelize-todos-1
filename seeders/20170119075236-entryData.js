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
      task: "Ngasih Duit ke Orang",
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: "Masih makan",
      status:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task:"Ngerjakin Project Phase 1 ",
      status:false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Todos',null,{})
  }
};
