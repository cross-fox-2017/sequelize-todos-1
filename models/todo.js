'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    todo: DataTypes.STRING,
    complete: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(cb) {
        Todo.findAll().then(function(data){
          let temp = [];
          data.forEach(function(item){
            temp.push({
              id: `${item.id}.`,
              todo: item.getBracket()
            })
          })
          cb(temp)
        })
      }
    },
    instanceMethods: {
      getBracket: function() {
        if(this.complete === 1){
          return `[x] ${this.todo}`
        } else {
          return `[ ] ${this.todo}`
        }
      }
    }
  });
  return Todo;
};
