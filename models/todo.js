'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    complete: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      getAllData: function(callback){

            Todo.findAll().done(function(result){
                    callback(result)
            })
      },

      addTask: function(data,callback){

        Todo
        .findOrCreate({where : {task : data}})
        .spread(function(todo, created){

                callback(created);
          })
          /*
          {
          username: 'sdepold',
          job: 'Technical Lead JavaScript',
          id: 1,
          createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
          updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
        }
        created: true
        */
      }// END HERE
    },
        instanceMethods: {

          getTask: function() {
            console.log("Task : "+this.task);
          },

          deleteTask: function(){

            console.log("Task : "+this.task+" deleted !");
             this.destroy()

          },

          completeTask: function(){
              this.update({complete:1})
              console.log("Task : "+this.task+" COMPLETED !");
          },

          unCompleteTask: function(){
            this.update({complete:0})
            console.log("Task : "+this.task+" UNCOMPLETE !");
          },
      }

  });
  return Todo;
};
