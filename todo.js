'use strict';

const db = require('./models')
let argv = process.argv

//write your code here
let messageArr = ["========== # TO DO LIST ==========",'help', 'list', 'add <task_content>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>']
function printMenu () {
  for (var i = 0; i < messageArr.length; i++) {
    console.log(messageArr[i]);
  }
}

// show menu & help

switch(argv[2]) {
    case undefined:
        printMenu()
        break;

    case 'help':
        printMenu()
        break;

    case 'add':
        db.Todo.create({
          task: argv.splice(3, argv.length).join(' '),
          completed: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }).then(function() {
            console.log('\n\n==== TASK ADDED ====\n');
          })
          .catch(function(e) {
            console.log(e.message);
          })
        break;

    case 'delete':
        db.Todo.destroy({
          where: {
           id: argv[3]
          }
        }).then(function() {
            console.log('\n\n==== TASK HAS BEEN DELETED ====\n');
          })
          .catch(function(e) {
            console.log(e.message);
          })
        break;

    case 'list':
        db.Todo.findAll().then(function(list) {
          console.log('\n\n==== HERE IS YOUR TASKS LIST ====\n');

          list.forEach(function(list) {
            if (list.dataValues.completed == false) {
              console.log(`[ ] ${list.dataValues.id}. ${list.dataValues.task}`);
            }
            if (list.dataValues.completed == true) {
              console.log(`[X] ${list.dataValues.id}. ${list.dataValues.task}`);
            }
          })
          console.log('\n');
        })
        break;

    case 'complete':
        db.Todo.findById(argv[3]).then(function (list) {
          console.log('\n\n== YOUR TASK IS COMPLETE NOW ===\n');
          list.update({
            completed: true,
            updatedAt: new Date()
          })
        })
        break;

    case 'uncomplete':
        db.Todo.findById(argv[3]).then(function (list) {
          console.log('\n\n== YOUR TASK IS UNCOMPLETE NOW ===\n');
          list.update({
            completed: false,
            updatedAt: new Date()
          })
        })
        break;

    default:
        console.log('salah');

}
