'use strict';
const db = require("./models");


// buat table
// sequelize model:create --name Todo --attributes task:text,status:string,created_date:date,tag:string
// Todo => nama variabel di model, huruf depan harus besar & enggak boleh pakai akhiran S (singgular word)

var temp = process.argv;
var argv = temp.slice(2);

if (argv[0] == "list") {
  daftar();
} else if (argv[0] == "add") {
  add();
} else if (argv[0] == "task") {
  task();
} else if (argv[0] == "delete") {
  hapus();
} else if (argv[0] == "complete") {
  complete();
} else {
  help();
}


function add() {
  db.Todo.create({ task: `'${argv[1]}'`, status: ''}).then(function(Todos) {})
}

function hapus() {
  // cari dulu dengan findById, baru bisa di lanjutkan dengan destroy
  // ingat PROMISE
  db.Todo.findById(argv[1]).then(function(todo) {
    return todo.destroy();
  })
}

function task() {
  db.Todo.findById(argv[1]).then(function(todo) {
    console.log(`
      Id no: ${todo.id}
      Task: ${todo.task}
      status[${todo.status}]`);
  })
}

function complete() {
  db.Todo.findById(argv[1]).then(function(todo) {
     return todo.update({ status: 'X'}, {fields: ['status']}).then(function() {
       // title will now be 'foooo' but description is the very same as before
    })
  })
}

function daftar() {
  db.Todo.findAll().then(function(data) {
   for (let i = 0; i < data.length; i++) {
     console.log(`
       Id no: ${data[i].id}
       Task: ${data[i].task}
       status[${data[i].status}]`);
    }
  })
}

function help() {
  console.log(`
  Command:
  // 1. help
  // 2. list
  // 3. add <task_content>
  // 4. task <task_id>
  // 5. delete <task_id>
`);
}
