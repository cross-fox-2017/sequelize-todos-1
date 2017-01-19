'use strict';

//write your code here
const fs = require('fs')
const db = require('./models');

let input = process.argv

if (input[2] === 'add') {
    db.Todo.create({
      taskName: input.splice(3, input.length).join(' '),
      complete: 0,
      tagName: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(function () {
      console.log('data add');
    }).catch(function (err) {
      console.log(err.massage);
    })
}else if (input[2] === 'delete') {
  db.Todo.destroy({
    where:{
      id: input[3]
    }
  }).then(function () {
    console.log(`id ${input[3]} has been deleted`);
  })
}else if (input[2] === 'complete') {
  db.Todo.findById(input[3]).then(function (todo) {
    todo.update({
      complete: true,
      updatedAt: new Date()
    }).then(function () {
      console.log(`id ${input[3]} complete`);
    })
  })
}else if (input[2] === 'uncomplete') {
  db.Todo.findById(input[3].then(function (todo) {
    todo.update({
      complete: false,
      updatedAt: new Date()
    }).then(function () {
      console.log(`id ${input[3]} uncomplete`);
    })
  }))
}else if (input[2] === 'list') {
  db.Todo.findAll().then(function (todo1) {
    todo1.forEach(function (todo2) {
      if (todo2.dataValues.complete == 1) {
        console.log(`${todo2.dataValues.id}. [X] ${todo2.dataValues.taskName}`);
      }else {
        console.log(`${todo2.dataValues.id}. [ ] ${todo2.dataValues.taskName}`);
      }
    })
  })
}
