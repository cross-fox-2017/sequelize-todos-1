'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
      // getAllData: function(callback) {
      //   Todo.findAll().then(function(data) {
      //     callback(data)
      //   })
      // },
      // getCompleteStatus: function(arguments) {
      //   return this.completed
      // }
    }
  });
  return Todo;
};
