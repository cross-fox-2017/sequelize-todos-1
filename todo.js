"use strict"

const fs = require('fs');
var db   = require("./models");

let argv = process.argv;
let node = "$ node todo.js"

switch(argv[2]){

  case undefined || 'help' :
  console.log(`===============HELP===============`);
  console.log(`${node} add <task content>`);
  console.log(`${node} list`);
  console.log(`${node} help`);
  console.log(`${node} delete <task_id>`);
  console.log(`${node} complete <task_id>`);
  console.log(`${node} uncomplete <task_id`);
  break;

  case 'add' :
  let strings = argv.splice(3).join(" ")
  db.Todo.create({"task_name"       : strings,
                  "complete_status" : 0,
                  "tag"             : null
                })
                .then(function() {
                    console.log("DATA ADDED");
                })
  break;

  case 'delete' :
  db.Todo.destroy({
    where:{
      id:argv[3]
    }
  })
  break;

  case 'uncomplete' :
  db.Todo.findById(argv[3]).then(function(todo) {
      todo.update({
        complete_status: false,
        updateAt: new Date()
      });
      console.log(`data dengan id ${argv[3]} sudah uncomplete`);
  })
  break;

  case 'complete' :
  db.Todo.findById(argv[3]).then(function(todo) {
      todo.update({
        complete_status: true,
        updateAt: new Date()
      });
      console.log(`data dengan id ${argv[3]} sudah complete`);
  })
  break;

  case 'list' :
  db.Todo.findAll().then(function(todo) {
    todo.forEach(function(data){
      if(data.complete_status == true) {
        console.log(`${data.id}. [X] ${data.task_name}`)
      } else {
          console.log(`${data.id}. [ ] ${data.task_name}`)
        }
    })
  })
    break;
}
