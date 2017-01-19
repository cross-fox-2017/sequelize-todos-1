'use strict'

const db = require('./models')
const faker = require('faker')
const chalk = require('chalk')

//View
function completed(data) {
  console.log(`ID: ${chalk.bold.red(data.id)} Task: ${chalk.bold(data.task)} ${chalk.bold.green(data.complete)}`);
}
function yetCompleted(data){
  console.log(`ID: ${chalk.bold.red(data.id)} Task: ${chalk.bold(data.task)} Not Completed Yet`)
}
function created(){
  console.log('New Task Created');
}
function deleted(id){
  console.log(`Task ${id} Deleted`);
}
function updated(id){
  console.log(`Task ${id} Completed`);
}
function helper(){
  console.log(`list\naddTask <taskName>\ndeleteTask <id>\ncomplete <id>\nhelp`);
}

//models
function list(){
  db.Todo.findAll().then(function(val){
    val.forEach(function(val){
      if (val.dataValues.complete == "Completed"){
        completed(val.dataValues)
      } else {
        yetCompleted(val.dataValues)
      }
    })
  })
}
function addTask(task) {
  db.Todo.create({task:task}).then(function(){
    created()
  })
}
function deleteTask(id){
  db.Todo.destroy({where: {id: id}}).then(function(){
    deleted(id)
  })
}
function complete(id){
  db.Todo.findById(id).then(function(data){
    data.update({complete:"Completed"}).then(function(){
      updated(id)
    })
  })
}
function help(){
  helper()
}

//controller
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

//todo.js
run()
