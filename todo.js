'use strict';
//write your code here
var db = require("./models");

let listMenu = ["# will call help",
                "node todo.js help",
                "node todo.js list",
                "node todo.js add <task_content>",
                "node todo.js task <task_id>",
                "node todo.js delete <task_id>",
                "node todo.js complete <task_id>",
                "node todo.js uncomplete <task_id>"];

let argv     = process.argv

if(argv[2] == undefined || argv[2] == "help"){
  for (let i = 0; i < listMenu.length; i++) {
    console.log(listMenu[i]);
  }
}

if(argv[2] == "add"){
  if(argv[3] == undefined){
    console.log('write something!');
  }
  else {
    db.todo.create({
      task:(argv.splice(3, argv.length).join(' ')),
      status:false,
      createdAt:new Date(),
      updatedAt: new Date()
    })
  }
}

if(argv[2] == "list"){
  db.todo.findAll().then(function(listTodo){
    listTodo.forEach(function(listTodo){
      if(listTodo.status == true){
        console.log(`[x] ${listTodo.id}. ${listTodo.task}`);
      }else {
        console.log(`[ ] ${listTodo.id}. ${listTodo.task}`);
      }
    })
  })
}

if(argv[2] == "delete"){
  if(argv[3] == undefined){
    console.log(`Enter ID to delete !`);
  }
  else {
    db.todo.destroy({
      where:{
        id:argv[3]
      }
    }).then(function(){
      console.log('Deleted Succes bro !!');
    }).catch(function(e){
      console.log(e.message);
    })
  }
}

if(argv[2] == "complete"){
  if(argv[3] == undefined){
    console.log('enter id for complate task !');
  } else {
      db.todo.findById(argv[3]).then(function(complete){
        complete.update({status : true})
        console.log(`Completed sucsess!!`);
      })
    }
  }

if(argv[2] == "uncomplete"){
  if(argv[3] == undefined){
    console.log(`id not defined!!`);
  }
  else {
    db.todo.findById(argv[3]).then(function(listTodo){
      listTodo.update({status:false})
        console.log(`uncomplete succes!!`);
    })
  }
}
