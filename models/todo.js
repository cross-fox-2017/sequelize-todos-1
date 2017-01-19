'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    taskName: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      // getListMenu:function(callBack){
      //   todo.findAll().then(function(menuTodos))
      //   callBack(menuTodos)
      // }
    }
  });
  return todo;
};
