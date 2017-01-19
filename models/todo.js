'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    completed: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods :{
      deleteTask: function(){
        return this.destroy()
      },
      completeTask: function(){
        return this.update({completed:1})
      },
      uncompleteTask: function(){
        return this.update({completed:0})
      }
    }
  });
  return Todo;
};
