"use strict"

const db = require('./models')
const fs = require('fs')
let argv = process.argv;
let task = argv[3];

switch (argv[2]) {

  case 'add':
    db.Todo.create({
      todo: task
    })
  break;

  case 'list':
    db.Todo.getAllData(function(todo) {
      todo.forEach(function(todo) {
        console.log(todo.id, todo.todo)
      })
    })
  break;

  case 'delete':
    db.Todo.destroy({
      where: {
        id: task
      }
    });
  break;

  case 'complete':
    db.Todo.findById(task).then(function(data){
      data.update({
        complete: 1
      })
    })

  break;

  default:
    console.log('node todo.js add <task_content>\nnode todo.js list\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>')
  break;
}











/*

  const fs = require('fs')
  let argv = process.argv;

  let file = fs.readFileSync('data.json', 'utf-8');
  let data = JSON.parse(file);

  let todo = [], str = '', id = 1, argId = argv[3];

  switch (argv[2]) {

    case 'add':
      for(let i = 3; i < argv.length; i++) {
        str += argv[i] + ' '
      }
      todo.push({id: id, todo: `[ ] ${str}`, date: new Date()});
      todo = JSON.parse(file);
      id = todo.length + 1
      todo.push({id: id, todo: `[ ] ${str}`, date: new Date()});
      let json = JSON.stringify(todo);
      fs.writeFile('data.json', json);
    break;


    case 'list':
      for(let i = 0; i < data.length; i++){
        console.log(`${data[i].id} ${data[i].todo}`)
      }
    break;


    case 'delete':
      let deleteID = argv[3];
      data.splice(deleteID-1,1);
      let deleteJSON = JSON.stringify(data);
      fs.writeFile('data.json', deleteJSON);
    break;


    case 'complete':
      let completeID = argId - 1;

      let changeComplete = data[completeID].todo.slice(3,20);

      data[completeID].todo = `[x]${changeComplete}`

      let completeJSON = JSON.stringify(data);
      fs.writeFile('data.json', completeJSON);
    break;


    default:
      console.log('node todo.js add <task_content>\nnode todo.js list\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>')
    break;
  }

*/
