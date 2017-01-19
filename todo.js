'use strict';

//write your code here
// const fs = require('fs');
//
// let data = JSON.parse(fs.readFileSync('data.json', 'UTF-8'));
// let argv = process.argv;
// let node = "=> node todo.js"
// let menu = (` ${node} add <task content> \n ${node} list \n ${node} help \n ${node} delete <task_id> \n ${node} complete <task_id> \n ${node} uncomplete <task_id \n ${node} task <task_id>`);
//
//
// if (argv[2] == undefined || argv[2] == "help") {
//     console.log(`!!!!!!HELP!!!!!!`);
//     console.log(menu);
// } else if (argv[2] == "add") {
//     let arr = [];
//     for (var i = 3; i < argv.length; i++) {
//         arr.push(argv[i]);
//     }
//     let strings = arr.join(" ");
//     data.push({
//         "id": data.length + 1,
//         "task": strings,
//         "status": "uncomplete"
//     })
//     fs.writeFileSync('data.json', JSON.stringify(data), 'UTF-8')
// } else if (argv[2] == "delete") {
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].id == argv[3]) {
//             data.splice(i, i + 1);
//             fs.writeFileSync('data.json', JSON.stringify(data), 'UTF-8')
//         }
//     }
// } else if (argv[2] == "complete") {
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].id == argv[3]) {
//             data[i].status = "complete";
//             fs.writeFileSync('data.json', JSON.stringify(data), 'UTF-8')
//         }
//     }
// } else if (argv[2] == "uncomplete") {
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].id == argv[3]) {
//             data[i].status = "uncomplete";
//             fs.writeFileSync('data.json', JSON.stringify(data), 'UTF-8')
//         }
//     }
// } else if (argv[2] == "task") {
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].id == argv[3]) {
//             console.log(data[i]);
//             fs.writeFileSync('data.json', JSON.stringify(data), 'UTF-8')
//         }
//     }
// } else if (argv[2] == "list") {
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].status == "complete") {
//             console.log(`${data[i].id}. [X] ${data[i].task}`)
//         } else {
//             console.log(`${data[i].id}. [ ] ${data[i].task}`)
//         }
//     }
// }
const fs = require('fs')
const db = require('./models/')
let argv = process.argv
let proArg = process.argv.splice(3, argv.length).join(" ")
let node = "=> node todo.js"
let menu = (` ${node} add <task content> \n ${node} list \n ${node} help \n ${node} delete <task_id> \n ${node} complete <task_id> \n ${node} uncomplete <task_id \n ${node} task <task_id>`);

switch(argv[2]) {
  case "add":
    db.Todo.create({
      task: proArg ,
      status: '0',
      updatedAt : new Date()
    })
  break

  case "list":
    db.Todo.findAll().then(function (todo){
      todo.forEach(function (todo) {
        console.log(`${todo.id}. ${(todo.status == '1')?"[x]":"[ ]"} ${todo.task}`)
      })
    })
  break
  // case "list":
  //   db.Todo.findAll().then(function (todo){
  //     todo.forEach(function (todo) {
  //       console.log(`${todo.id}. ${(todo.status == '1'){return '[x]'}else{return '[ ]'} ${todo.task}`)
  //     })
  //   })
  // break
  case "delete":
    db.Todo.destroy({
      where:{
        id: proArg
      }
    })
  break

  case "complete":
    db.Todo.findById(proArg).then(function (todo){
      if(todo.status === '0'){
          todo.updateAttributes({
            status: '1'
          })
      }
    })
    break;
    case "uncomplete":
      db.Todo.findById(proArg).then(function (todo){
        if(todo.status === '1'){
            todo.updateAttributes({
              status: '0'
            })
        }
      })
      break
  default:
  console.log(menu);
  break
}
