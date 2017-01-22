'use strict';

//write your code here
const db = require('./models')
let argv = process.argv

switch (argv[2]) {
  case  "help" :
    console.log(`\nnode todo.js # will call help\nnode todo.js help\nnode todo.js add <task_content>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <taskid>\n`)
    break;

  case  "list" :
    db.Todo.findAll().then(function (listToDo){
      console.log("List yang harus dilakukan")
      let temp = ''
      for(var i=0; i<listToDo.length; i++){
        if(!listToDo[i].completed){
          temp = temp + `${i+1}. [ ] ${listToDo[i].task}\n`
        }
        else{
          temp = temp + `${i+1}. [X] ${listToDo[i].task}\n`
        }
      }
      console.log(temp)
    })
    break


  case  "add" :
    db.Todo.create({
      task : argv.splice(3,argv.length).join(' '),
      completed : false,
      createdAt : new Date().getTime(),
      updatedAt : new Date().getTime()
    })
    break

  case  "delete" :
    db.Todo.destroy({
      where :{
        id : argv[3]
      }
    })
    break

  case  "complete" :
    db.Todo.findById(argv[3]).then(function(todo){
      if(todo == null){
        db.Todo.findAll().then(function(todo){
          console.log(`\nid is not found, here is a list of available key-id :`);
          for(var i=0; i<todo.length; i++){
            console.log(`${todo[i].id} -- ${todo[i].task}`);
          }
        })
      }
      else{
        todo.updateAttributes({
            completed : true
          })
        console.log(`data status has been changed`);
        }
      // if(todo.completed == false){
      //   todo.updateAttributes({
      //     completed : true
      //   })
      // }
      // else{
      //   console.log(`id is not found, here is a list of available id :`)
      //   for(var i=0; i<todo.length; i++){
      //     console.log(`${todo.id}. ${todo.task}`);
      //   }
      // }
    })
    break

  case  "uncomplete" :
    db.Todo.findById(argv[3]).then(function(todo){
      if(todo == null){
        db.Todo.findAll().then(function(todo){
          console.log(`\nid is not found, here is a list of available key-id :`);
          for(var i=0; i<todo.length; i++){
            console.log(`${todo[i].id} -- ${todo[i].task}`);
          }
        })
      }
      else{
        todo.updateAttributes({
          completed : false
        })
        console.log(`data status has been changed`);
      }
    })
    break
  default:
    console.log(`\ncommand is unrecognized. see help:\n\nnode todo.js # will call help\nnode todo.js help\nnode todo.js add <task_content>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <taskid>\n`)
}
