const inquirer = require('inquirer');
var todos = [];

var choice = [
    {
      type: 'input',
      name: 'action',
      message: 'Create, Delete, or View Todos?'
    }
  ];

var createChoice = [
    {
        type: 'input',
        name: 'todo',
        message: 'What Task do you Want to Complete?'
    }
]

var deleteChoice = [
    {
        type: 'input',
        name: 'todo',
        message: 'What Task do you Want to Delete (number/row of item)?'
    }
]

ask();

function ask(){
    inquirer.prompt(choice).then(answers => {
        let answer = answers.action.toString().toUpperCase();
        if(answer === "CREATE"){
         createTodo();
        } else if(answer === "DELETE"){
         deleteTodo();
        }
    });
}



function createTodo(){
    inquirer.prompt(createChoice).then(answers => {
        let task = answers.todo.toString();
        todos.push(task);
        console.log("Created " + task);
        ask();
    });
    
}

function deleteTodo(){
    inquirer.prompt(deleteChoice).then(answers => {
        let taskNumber = parseInt(answers.todo.toString());
        console.log(taskNumber)
        for(var i = 0; i < todos.length; i++){
            if(i === taskNumber){
                todos.splice(i, 1);
                console.log("Deleted Item #" + i)
            }
        }
        ask();
    });
}