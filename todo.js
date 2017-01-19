'use strict';

var skrip = 'data.json'
let code = process.argv[2]
let code2 = process.argv.splice(3).join(' ')
const db = require("./models")
//
// db.todo.findAll().then(function(data){
//   // data.forEach(function(micdata){
//   //   console.log("task: " + micdata.task)
//   //
//   // })
//   console.log(data)
// })
if(code === 'list'){
  db.Todo.findAll().then(function(data){
    data.forEach(function(mdata){
      if(mdata.completed===0){
        console.log(`[ ] ${mdata.id}. ${mdata.task}`)
      }
      else{
        console.log(`[X] ${mdata.id}. ${mdata.task}`)
      }
    })
  })
}

else if(code==='add'){
  db.Todo.create({task:code2, completed:0}).then(function(){
    console.log(`Appended "${code2}" to your TODO list`)
  })
}

else if(code==='delete'){
  db.Todo.findById(code2).then(function(x){
    x.deleteTask()
    console.log(`Deleted task with id ${code2} from your TODO list`)
  })
}

else if(code==='complete'){
  db.Todo.findById(code2).then(function(x){
    x.completeTask()
    console.log(`${x.task} have been completed`);
  })
}

else if(code==='uncomplete'){
  db.Todo.findById(code2).then(function(x){
    x.uncompleteTask()
    console.log(`${x.task} have been uncompleted`);
  })
}
