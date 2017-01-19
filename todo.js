"use strict"

let db = require("./models");

// Model
function add(string) {
  db.Todo.create(
  {task: string, completed: 0
  }).then(function (data) {
    console.log(`Added ${data.dataValues.task} to your TODO list...`);
  }).catch(function (err) {
    console.log(err.message);
  });
}

function deleting(id_input) {
  db.Todo.destroy({
    where: {
      id: id_input
    }
  }).then(function () {
    console.log(`Deleted data with id: ${id_input} from your TODO list...`);
  })
}

function complete(id_input) {
  db.Todo.findById(id_input).then(function (find) {
    find.update({
      completed: 1
    }).then(function () {
      console.log(`Completed task with id: ${id_input} from your TODO list...`);
    })
  })
}

function uncomplete(id_input) {
  db.Todo.findById(id_input).then(function (find) {
    find.update({
      completed: 0
    }).then(function () {
      console.log(`Uncompleted task with id: ${id_input} from your TODO list...`);
    })
  })
}

// View
function help() {
  let showArr = ["$ node todo.js # will call help", "$ node todo.js help",
  "$ node todo.js list", "$ node todo.js add <task_content>",
  "$ node todo.js task <task_id>", "$ node todo.js delete <task_id>",
  "$ node todo.js complete <task_id>", "$ node todo.js uncomplete <task_id>"];
  console.log(showArr.join("\n"));
}

function list() {
  db.Todo.findAll().then(function (data) {
    if (data.length > 0) {
      data.forEach(function (show) {
        console.log(`${show.dataValues.id}. [${show.dataValues.completed ? "X" : " "}] ${show.dataValues.task}`);
      })
    }
    else {
      console.log("Empty tasks");
    }
  })
}

// Controller
function run(param) {
  switch (param[0]) {
    case "help":
      help();
      break;
    case "list":
      list();
      break;
    case "add":
      param.shift();
      add(param.join(" "));
      break;
    case "delete":
      deleting(param[1]);
      break;
    case "complete":
      complete(param[1]);
      break;
    case "uncomplete":
      uncomplete(param[1]);
      break;
    default:
      console.log("Please input correct command.");
      break;
  }
}

// Driver code
let arg = process.argv.slice(2, process.argv.length);
run(arg);

/*
Untuk sort:
function sortId(data) {
  for (let i = 0; i < data.length; i++) {
    data = i+1;
  }
  console.log(data);
  return data;
}

db.Todo.findAll().then(function (find) {
  console.log(find.length);
  find.forEach(function (data) {
    let i = 1
    data.dataValues.id = i;
    i++;
    console.log(data.dataValues);
  })
})
*/

/*
1. Bulk Create
db.Student.bulkCreate([
  {first_name: 'Rubi', last_name: "Henjaya", birthdate: "1986-11-20"},
  {first_name: 'Riza', last_name: "Fahmi", birthdate: "1983-12-31"},
  {first_name: 'Windi', last_name: "Ana", birthdate: "1987-07-11"}
]).then(function (students) {
  students.forEach(function (students) {
    console.log(students.getFullName());
  })
})
*/

/*
2. Cara call back tanpa for each:
db.Student.getAllData(function (data) {
  console.log(data[0].dataValues);
});
*/
