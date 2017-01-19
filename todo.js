'use strict';

const db = require('./models')
const faker = require('faker')
const chalk = require('chalk')

function list(){
  db.Todo.findAll().then(function(val){
    val.forEach(function(val){
      if (val.dataValues.complete == "Completed"){
        console.log(`ID: ${chalk.bold.red(val.dataValues.id)} Task: ${chalk.bold(val.dataValues.task)} ${chalk.bold.green(val.dataValues.complete)}`);
      } else {
        console.log(`ID: ${chalk.bold.red(val.dataValues.id)} Task: ${chalk.bold(val.dataValues.task)} Not Completed Yet`)
      }
    })
  })
}
function addTask(task) {
  db.Todo.create({task:task}).then(function(){
    console.log('New Task Created');
  })
}
function deleteTask(id){
  db.Todo.destroy({where: {id: id}}).then(function(){
    console.log(`Task ${id} Deleted`);
  })
}
function complete(id){
  db.Todo.findById(id).then(function(data){
    data.update({complete:"Completed"}).then(function(){
      console.log(`Task ${id} Completed`);
    })
  })
}
function help(){
  console.log(`list()\naddTask <taskName>\ndeleteTask <id>\ncomplete <id>\nhelp()`);
}

function run(){
  let cmd = process.argv[2];
  let taskid = process.argv.slice(3).join(" ");
  switch (cmd) {
    case "help":
      return help()
      break;
    case "list":
      return list()
      break;
    case "add":
      return addTask(taskid)
      break;
    case "delete":
      return deleteTask(taskid)
      break;
    case "complete":
      return complete(taskid)
      break;
    default:
      return help()
  }
}

run()
// list()
// addTask('tester data')
// deleteTask(8)
// complete(3)
