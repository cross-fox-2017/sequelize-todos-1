'use strict';
//JS_TodoList_Ver_1 (MVC)
//-create todo item
//-list todo item
//-delete todo item
//-check (complete/uncomplete) todo item

const fs 		= require('fs');
const db 		= require('./models');
let arg	    = process.argv
let argv  	= process.argv[3]

switch(arg[2]) {
  case "add":
    db.Todo.create({
      task: argv,
      complete: 0
    })
  break

  case "list":
    db.Todo.findAll().then(function (todo){
      todo.forEach(function (todo) {
        console.log(`${todo.id}. ${(todo.complete == 1)?"[x]":"[ ]"} ${todo.task}`)
      })
    })
  break

  case "delete":
    db.Todo.destroy({
      where:{
        id: argv
      }
    })
  break

  case "complete":
    db.Todo.findById(argv).then(function (todo){
      if(todo.complete === 0){
          todo.updateAttributes({
            complete: 1
          })
      }
    })
  break

  default:
    console.log('node todo.js add <task_content>\nnode todo.js list\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>')
  break
}


// console.log(argv[1])
// todoData(argv)
//
// // Model
//
// function json(){
// 	let json = JSON.parse(fs.readFileSync("data.json", "utf-8"))
// 	return json
// }
//
// function jsonWrite(data){
// 	fs.writeFileSync("data.json", JSON.stringify(data, null, 3))
// }
//
// function sort(data){
// 	for (let i = 0; i < data.length; i++) {
// 		data[i].id = i+1
// 	}
// 	return data
// }
//
// function add(task) {
// 	let data = json()
// 	let todoList =
// 	{
// 		"id": 0, "task": task, "completed": false, "created_at": new Date()
// 	}
// 	data.push(todoList)
// 	data = sort(data)
// 	jsonWrite(data)
// 	console.log(`Success added ${todoList.task}`)
// }
//
// function deleted(id){
// 	let data = json()
// 	for (let i = 0; i < data.length; i++) {
// 		if(data[i].id == id) {
//
// 			console.log("Record deleted "+data[i].task)
//
// 			data.splice(i, 1)
// 			break
// 		}
// 	}
//
// 	data = sort(data)
// 	jsonWrite(data)
// 	// console.log(`Record list deleted ${id}`)
// }
//
// function complete(id) {
// 	let data = json()
// 	for (let i = 0; i < data.length; i++) {
// 		if(data[i].id == id) {
// 			data[i].completed = true
// 			break
// 		}
// 	}
// 	jsonWrite(data)
// }
//
// function uncomplete(id) {
// 	let data = json()
// 	for (let i = 0; i < data.length; i++) {
// 		if(data[i].id == id) {
// 			data[i].completed = false
// 		break
// 		}
// 	}
// 	jsonWrite(data)
// }
//
// // View
//
// function menu() {
// 	let helpMenu = ["$ node todo.js # will call help", "$ node todo.js help", "$ node todo.js list",
// 	"$ node todo.js add <task_content>", "$ node todo.js task <task_id>",
// 	"$ node todo.js delete <task_id>", "$ node todo.js complete <task_id>",
// 	"$ node todo.js uncomplete <task_id>"]
//   	 console.log(helpMenu.join("\n"))
// }
//
// function list(data) {
// 	if(data.length > 0) {
// 		for (let i = 0; i < data.length; i++) {
// 			//conditional (ternary) operator: condition ? expr1 : expr2
// 			console.log(`${data[i].id}. [${data[i].completed ? "X" : " "}] ${data[i].task}`)
// 		}
// 	}
// 	else {
// 		console.log("-")
// 	}
// }
//
// // Controller
//
// function todoData(param) {
// 	switch(param[0]) {
// 		case "help": menu()
// 			break
// 		case "list": list(json())
// 			break
// 		case "add": param.shift()
// 			add(param.join(" "))
// 			break
// 		case "delete": deleted(param[1])
// 			break
// 		case "complete": complete(param[1])
// 			break
// 		case "uncomplete": uncomplete(param[1])
// 			break
// 		default:
// 			console.log("Try again correctly.")
// 			break
// 	}
// }
