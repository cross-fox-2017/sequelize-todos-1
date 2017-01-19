'use strict';

//write your code here
const db = require('./models')


var argv = process.argv;
let help = '$ node todo.js'
// console.log(argv);

if (argv[2] == undefined || argv[2] == 'help') {
  console.log(`${help} help`);
  console.log(`${help} list`);
  console.log(`${help} add <task_content>`);
  console.log(`${help} task <task_id>`);
  console.log(`${help} delete <task_id>`);
  console.log(`${help} complete <task_id>`);
  console.log(`${help} uncomplete <task_id>`);
}

if(argv[2] == 'add') {
  var input = argv.splice(3).join(' ')
  // console.log(input);
  db.Todo.create({
    task: input,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

if (argv[2] == 'delete') {
  db.Todo.destroy({
    where: {
      id: argv[3]
    }.then(function(){
      console.log('task deleted');
    })
  })
}

if(argv[2] == 'list') {
  db.Todo.findAll().then(function(list) {
    // console.log(list);
    list.forEach(function(list) {
      if(list.dataValues.completed == true) {
        console.log(`[X] ${list.dataValues.id}. ${list.dataValues.task}`);
      } else {
        console.log(`[ ] ${list.dataValues.id}. ${list.dataValues.task}`);
      }
    })
  })
}


if (argv[2] == 'complete'){
  db.Todo.findById(argv[3]).then(function(todo){
    todo.update({
      completed: true,
      updatedAt: new Date()
    })
  })
}

if (argv[2] == 'uncomplete'){
  db.Todo.findById(argv[3]).then(function(todo){
    todo.update({
      completed: false,
      updatedAt: new Date()
    })
  })
}
