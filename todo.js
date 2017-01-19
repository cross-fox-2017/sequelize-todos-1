'use strict';

//write your code here
let word = '$node todo.js'
let arg = process.argv
let db = require('./models');
let help = ['node todo.js','node todo.js help','node todo.js list','node todo.js add <task_content>',
'node todo.js task <task_id>','node todo.js delete <task_id>','node todo.js complete <task_id>',
'node todo.js uncomplete <task_id>']
help = help.join('\n')

switch (arg[2]) {

  case 'help':
  console.log('=========Menu Help=========');
  console.log(help);
  break;

  case 'list':
  db.Todo.findAll().then(function(todos1){
    console.log("TODO LIST")
    todos1.forEach(function(todos2){
      if (todos2.dataValues.completed == 1) {
        console.log(`${todos2.dataValues.id}. [x] ${todos2.dataValues.task}`);
      }
      else {
        console.log(`${todos2.dataValues.id}. [ ] ${todos2.dataValues.task}`);
      }
    })
  })
  break;

  case 'add':
  let kata = arg.splice(3,arg.length-3)
  kata = kata.join(' ');
  db.Todo.create({ task: `${kata}`, completed: 0, createdAt: new Date(), updatedAt: new Date()})
    console.log('added')
  break;

  case 'task':
  db.Todo.findById(arg[3]).then(function(todos2){
    if (todos2.dataValues.completed == 1) {
      console.log(`${todos2.dataValues.id}. [x] ${todos2.dataValues.task}`);
    }
    else {
      console.log(`${todos2.dataValues.id}. [ ] ${todos2.dataValues.task}`);
    }
  })
  break;

  case 'delete':
  db.Todo.destroy({
    where: {
      id: `${arg[3]}`
    }
  });
  break;

  case 'complete':
    db.Todo.findById(arg[3]).then(function(todos1){
      todos1.update({
        completed: true,
        updatedAt: new Date()
      })
    })
  break;

  case 'uncomplete':
    db.Todo.findById(arg[3]).then(function(todos1){
      todos1.update({
        completed: false,
        updatedAt: new Date()
      })
    })
  break;

  default:
  console.log('=========Menu Default=========');
  console.log(help);
  break;
}
