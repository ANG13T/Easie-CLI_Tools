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

inquirer.prompt(choice).then(answers => {
    let answer = answers.action.toString().toUpperCase();
    if(answer === "CREATE"){
     createTodo();
    } else if(answer === "DELETE"){
     deleteTodo();
    }
});


function createTodo(){
    inquirer.prompt(createChoice).then(answers => {
        let task = answers.todo.toString();
        todos.push(task);
        console.log("Created " + task);
    });
}

function deleteTodo(){
    
}