'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task_name      : DataTypes.STRING,
    complete_status: DataTypes.BOOLEAN,
    tag            : DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      createData: function(cb){
        Todo.create()
      }
    },
    instanceMethods: {

    }
  });
  return Todo;
};
