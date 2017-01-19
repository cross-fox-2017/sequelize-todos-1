'use strict';
//write your code here
var model = require('./models')
//untuk kebutuhan mendapatkan nilai MAX dalam array
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

var input = process.argv

switch (input[2]) {

  case "add":

  let task = input[3]

  model.Todo.addTask(input[3],function(created){

                  if(!created){
                  console.log("TASK ALREADY EXISTS");
                  }
                  else{
                    console.log("TASK SUCCESS ADDED");
                  }
                })
  break;

  case "list":

      model.Todo.getAllData(function(data){

          console.log("TO DO LIST !");
          console.log("------------");
          for(let i = 0; i < data.length;i++){

              console.log(`${data[i].id}.  ${data[i].complete ? '[X]' : '[ ]'} ${data[i].task}`);

          }
      })

  break;

  case "task":

  model.Todo.findById(input[3]).then(function(Todo){

        Todo.getTask()
  })

  break;

  case "delete":

  model.Todo.findById(input[3]).then(function(Todo){

        Todo.deleteTask()
  })
  break;

  case "complete":

  model.Todo.findById(input[3]).then(function(Todo){

        Todo.completeTask()
  })
  break;

  case "uncomplete":

  model.Todo.findById(input[3]).then(function(Todo){

        Todo.unCompleteTask()
  })
  break;

  default:
    Help()

}


// fs.writeFileSync('data.json',JSON.stringify(json,null,3),'utf8');

function Help(){
    let arr = ['help', 'list', 'add <task_content>', 'task <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>']


    for(let i = 0; i < arr.length; i++){
      console.log("node todo.js "+arr[i]);
    }

}

function showList(){

    let data = connect();

    console.log("CURRENT TASK !");
    for(let i = 0; i < data.length; i++){

        console.log((i+1)+". "+data[i].Complete+" "+data[i].Task);
    }

}

function addList(value){

  let json = connect();
  let id = getincrement() + 1;

  json.push({

          "id" : id,
          "Task" : value,
          "Complete" : "[ ]"
  })

 fs.writeFileSync('data.json',JSON.stringify(json,null,3),'utf-8')

}

function Task(id){

  let json = connect();

  for(let i = 0; i < json.length; i++)
  {
      if(json[i].id == id)
      {
        console.log("TASK : "+json[i].Task);
      }
  }


}

function Dlete(id){

  let json = connect()

  for(let i = 0; i < json.length; i++){

        if(json[i].id == id){

            let key = json.indexOf(json[i]);

            console.log("TASK : "+json[i].Task+" [DELETED]");
            json.splice(key,1)

        }
  }

    fs.writeFileSync('data.json',JSON.stringify(json,null,3),'utf-8')

}

function Complete(id){

    let json = connect()

    for(let i = 0; i < json.length; i++){

          if(json[i].id == id){

            console.log("TASK : "+json[i].Task+" [COMPLETED]");

              json[i].Complete = "[X]"
          }
    }

      fs.writeFileSync('data.json',JSON.stringify(json,null,3),'utf-8')
}

function unComplete(id){

  let json = connect()

  for(let i = 0; i < json.length; i++){

        if(json[i].id == id){

            console.log("TASK : "+json[i].Task+" [UNCOMPLETED]");
            json[i].Complete = "[ ]"
        }
  }
    fs.writeFileSync('data.json',JSON.stringify(json,null,3),'utf-8')
}


function getincrement(){

  let json = connect();
  let penampungID = [];
  for(let i = 0; i < json.length;i++)
  {
    penampungID.push(json[i].id)
  }
  return penampungID.max();
}

function connect(){

  let data = fs.readFileSync('data.json', 'utf-8')
  let json = JSON.parse(data);

  return json
}
