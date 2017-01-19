'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
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
            task: "Belajar JS",
            status: '0',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }, {
            task: "Coding",
            status: '0',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }, {
            task: "Makan",
            status: '0',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }])
    }, //end of up

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        // return queryInterface.bulkDelete('Todos', null, {});
    }
};
