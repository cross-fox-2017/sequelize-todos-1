"use strict"

const models = require('./models')

process.argv.forEach((pilihan) => {
    if (pilihan == "list") {
      models.Todo.findAll().then(function(db){
        db.forEach(function(getDb){
          console.log(getDb.task);
        })
      })
    } else if (pilihan == "help") {
        console.log(`\n node todo.js list \n node todo.js add <task_content> \n node todo.js task <task_id> \n node todo.js delete <task_id> \n node todo.js complete <task_id> \n node todo.js uncomplete <task_id>`);
    } else if (pilihan == "add") {
        var tmp = ''
        for (var i = 3; i < process.argv.length; i++) {
            tmp += process.argv[i] + " "
        }
        models.Todo.create({
          task:tmp,
          status:false,
          createdAt:new Date(),
          updatedAt:new Date()
        })

        console.log(`Add "${tmp}" ke Todo List`);
    } else if (pilihan == "task") {
        var index = process.argv[3]
        models.Todo.findById(index).then(function(data){
          console.log("Task: "+ data.task);
          console.log("Status: "+data.status);
        })
    } else if (pilihan == "delete") {
        var index = process.argv[3]
        models.Todo.findById(index).then(function(data){
          console.log("Hapus Task: "+ data.task);
          data.destroy()
        })
    } else if (pilihan == "complete") {
        var index = process.argv[3]
        models.Todo.findById(index).then(function(data){
          data.status = true,
          data.updatedAt = new Date()
          data.save()
          console.log("Task: "+ data.task);
          console.log("Status: "+data.status);
        })
    } else if (pilihan == "uncomplete") {
        var index = process.argv[3]
        models.Todo.findById(index).then(function(data){
          data.status = false,
          data.updatedAt = new Date()
          data.save()
          console.log("Task: "+ data.task);
          console.log("Status: "+data.status);
        })
    }
})
