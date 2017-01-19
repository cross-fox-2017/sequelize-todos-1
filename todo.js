"use strict"
let word = '$node todo.js '
let argv = process.argv
const db = require('./models');

if(argv[2] == undefined) {
  console.log(`${word} help`);
  console.log(`${word} list`);
  console.log(`${word} add <task_content>`);
  console.log(`${word} task <task_id>`);
  console.log(`${word} delete <task_id>`);
  console.log(`${word} complete <task_id>`);
  console.log(`${word} uncomplete <task_id>`);
} else if (argv[2] == 'help') {
  console.log(`${word} help`);
  console.log(`${word} list`);
  console.log(`${word} add <task_content>`);
  console.log(`${word} task <task_id>`);
  console.log(`${word} delete <task_id>`);
  console.log(`${word} complete <task_id>`);
  console.log(`${word} uncomplete <task_id>`);
}

if(argv[2] == 'add') {
  db.Todo.create({
    task: argv.splice(3,argv.length).join(' '),
    completed: 0,
    createdAt: new Date(),
    completedAt: new Date()
  }).then(function(){
    console.log('data added')
  })
  .catch(function(e){
    console.log(e.message);
  })
}


if(argv[2] == 'delete') {
  db.Todo.destroy({
    where: {
      id: argv[3]
    }
  }).then(function(){
    console.log('data deleted')
  })
  .catch(function(e){
    console.log(e.message);
  })
}

if(argv[2] == 'list') {
  console.log('LIST TASK');
  db.Todo.findAll().then(function(todo){
    todo.forEach(function(todo){
      console.log(todo.dataValues)
      if(todo.dataValues.completed == true) {
        console.log(`[X] ${todo.dataValues.id}. ${todo.dataValues.task}`)
      } else {
        console.log(`[ ] ${todo.dataValues.id}. ${todo.dataValues.task}`)
      }
    })
  })
}

if(argv[2] == 'complete') {
  console.log(`Task ke-${argv[3]} ditandai selesai`)
  db.Todo.findById(argv[3]).then(function(todo){
    todo.update({
      completed: true,
      updatedAt: new Date()
    })
  })
}

if(argv[2] == 'uncomplete') {
  console.log(`Task ke-${argv[3]} ditandai belum selesai`)
  db.Todo.findById(argv[3]).then(function(todo){
    todo.update({
      completed: false,
      updatedAt: new Date()
    })
  })
}
