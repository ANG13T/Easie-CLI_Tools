const inquirer = require('inquirer');
const clc = require('cli-color');
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

var clearChoice = [
    {
        type: 'input',
        name: 'confirmation',
        message: 'Are you sure? (y or n)'
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
        } else if(answer === "VIEW"){
         listTodos();
        } else if(answer === "CLEAR"){
            clearTodos();
        }
    });
}



function createTodo(){
    inquirer.prompt(createChoice).then(answers => {
        let task = answers.todo.toString();
        todos.push(task);
        console.log(clc.greenBright("Created " + task));
        ask();
    });
    
}

function deleteTodo(){
    inquirer.prompt(deleteChoice).then(answers => {
        let taskNumber = parseInt(answers.todo.toString());
        for(var i = 0; i < todos.length; i++){
            if(i === taskNumber){
                todos.splice(i - 1, 1);
                console.log(clc.greenBright("Deleted Item #" + i))
            }
        }
        ask();
    });
}

function clearTodos(){
    inquirer.prompt(clearChoice).then(answers => {
        let confirmAnswer = answers.confirmation.toString().toUpperCase();
        if(confirmAnswer === "YES" || "Y"){
            for(var i = 0; i < todos.length; i++){
                    todos.slice(i,1);
            }
            console.log(clc.greenBright("Cleared Items"))
        } else{
            console.log(clc.redBright("Not Clearing Items"))
        }
        
        ask();
    });
}

function listTodos(){
    for(var i = 0; i < todos.length; i++){
        console.log(clc.greenBright((i + 1) + ") " + todos[i]))
    } 
    ask();
}