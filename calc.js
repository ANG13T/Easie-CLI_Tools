const inquirer = require('inquirer');
var numbers = [];
var times = 0;

var askOperation = [
    {
      type: 'input',
      name: 'operation',
      message: 'Enter Operation:'
    }
  ];

var askNum1 = [
    {
      type: 'input',
      name: 'number1',
      message: 'Enter first number:'
    }
  ];

var askNum2 = [
{
    type: 'input',
    name: 'number2',
    message: 'Enter second number:'
}
];
ask();

function ask(){

    inquirer.prompt(askOperation).then(answers => {
        var operationAns = answers.operation.toString().toUpperCase();
        if(operationAns === "ADD" || operationAns === "ADDITION"){
            addition();
        } else if (operationAns === "SUB" || operationAns === "SUBTRACT" || operationAns === "SUBTRACTION"){ 
            subtraction();
        } else if(operationAns === "DIV" || operationAns === "DIVIDE" || operationAns === "DIVISION"){
            division();
        } else if(operationAns === "MULTI" || operationAns === "MULTIPLY" || operationAns === "MULTIPLICATION"){
            multiplication();
        } else{
            console.log("Invalid operation")
            ask()
        }
    });
}

function askNumOne(){
    inquirer.prompt(askNum1).then(answers => {
        var number = answers.number1;
        if(number % 1 === 0){
            numbers.push(number)
            askNumTwo();
        }else{
            console.log("Invalid Input")
            askNumOne();
        }
    })
}


function askNumTwo(){
    inquirer.prompt(askNum2).then(answers => {
        var number = answers.number2;
        if(number % 1 === 0){
            numbers.push(number)
        }else{
            console.log("Invalid Input")
            askNumTwo();
        }
    }) 
}

function addition(){
    askNumOne();
    console.log(numbers[0] + numbers[1])
    ask();
}

function subtraction(){
    askNumOne();
    console.log(numbers[0] - numbers[1])
    ask();
}

function division(){
    askNumOne();
    console.log(numbers[0] / numbers[1])
    ask();
}


function multiplication(){
    askNumOne();
    console.log(numbers[0] * numbers[1])
    ask();
}



