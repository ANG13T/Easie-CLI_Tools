const inquirer = require('inquirer');
const clc = require('cli-color');

var askComand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Command:'
    }
  ];

  var askString = [
    {
      type: 'input',
      name: 'string',
      message: 'Enter String:'
    }
  ];

  var askString2 = [
    {
      type: 'input',
      name: 'string2',
      message: 'Enter String:'
    }
  ];

  var askAmount = [
    {
      type: 'input',
      name: 'amount',
      message: 'How many times to repeat:'
    }
  ];

  var askStart = [
    {
      type: 'input',
      name: 'start',
      message: 'Start Splice:'
    }
  ];

  var askEnd = [
    {
      type: 'input',
      name: 'end',
      message: 'End Splice:'
    }
  ];

  console.log("Welcome to Simple String Service")
  console.log("Type in \"help\" if you need to know the commands")
ask()

function ask(){
    inquirer.prompt(askComand).then(answers => {
        var command = answers.command.toString().trim().toUpperCase();

        if(command === "REPEAT"){
            repeatString()
        }else if(command === "REVERSE"){
            reverseString() 
        }else if(command === "SLICE"){
            spliceString()
        }else if(command === "LENGTH"){
            stringLength()
        }else if(command === "CONCAT"){
            concatString()
        }else if(command === "FIND"){
            findStringIndex()
        }else if(command === "UPPERCASE"){
            uppercaseString()
        }else if(command === "LOWERCASE"){
            lowercaseString()
        }else if(command === "HELP"){
            help()
        }else{
            console.log(clc.redBright("Invalid Input"))
            ask();
        }
    })
}

function repeatString(){
    var repString = "";
    var repAmount = 0;

    inquirer.prompt(askString).then(answers => {
        repString = answers.string.toString();
        inquirer.prompt(askAmount).then(answers => {
            var amount = answers.amount;
            if(amount % 1 === 0){
                repAmount = amount;
                for(var i = 0; i < repAmount; i++){
                    console.log(clc.greenBright(repString))
                }
                ask()
                
            }else{
                console.log(clc.redBright("Invalid Input"))
                repeatString()
            } 
        })
    });
}


function reverseString(){
    inquirer.prompt(askString).then(answers => {
        var revString = answers.string.toString();
        console.log(clc.greenBright(revString.split('').reverse().join('')))
        ask()
    });
}

function stringLength(){
    inquirer.prompt(askString).then(answers => {
        var lenString = answers.string.toString();
        console.log(clc.greenBright(lenString.length))
        ask()
    });
}

function concatString(){ 
    var firstString = "";
    var secondString = "";
    inquirer.prompt(askString).then(answers => {
        firstString = answers.string.toString();
        inquirer.prompt(askString2).then(answers2 => {
            secondString = answers2.string2.toString();
            console.log(clc.greenBright(firstString + secondString))
            ask()
        });
    });
}


function findStringIndex(){
    var findString = "";
    var indexString = "";
    inquirer.prompt(askString).then(answers => {
        findString = answers.string.toString();
        inquirer.prompt(askString2).then(answers2 => {
                indexString = answers2.string2.toString();
                console.log(clc.greenBright(findString.search(indexString)))
                ask()
        });
    });
}


function spliceString(){
    var splString = "";
    var startSplice = 0;
    var endSplice = 0;
    inquirer.prompt(askString).then(answers => {
        splString = answers.string.toString();
        inquirer.prompt(askStart).then(answers => {
            if(answers.start % 1 == 0){
                startSplice = answers.start
                inquirer.prompt(askEnd).then(answers => {
                    if(answers.end % 1 == 0){
                        endSplice = answers.end;
                        console.log(clc.greenBright(splString.slice(startSplice,endSplice)))
                        ask()
                    }else{
                        console.log(clc.redBright("Invalid Command"))
                        spliceString()
                    }
                });
            } else{
                console.log(clc.redBright("Invalid Command"))
                spliceString()
            }
        });
    });

}

function uppercaseString(){
   var upperString = ""
    inquirer.prompt(askString).then(answers => {
        upperString = answers.string.toString();
        console.log(clc.greenBright(upperString.toUpperCase()))
    });
}

function lowercaseString(){
    var lowerString = ""
    inquirer.prompt(askString).then(answers => {
        lowerString = answers.string.toString();
        console.log(clc.greenBright(lowerString.toLowerCase()))
    });
}

function help(){
    console.log(clc.yellowBright("-> REPEAT: repeats a string x amount of times"))
    console.log(clc.yellowBright("-> REVERSE: reverses a string"))
    console.log(clc.yellowBright("-> SLICE: gets part of a string(slices) from x to y"))
    console.log(clc.yellowBright("-> LENGTH: gets the length of the string"))
    console.log(clc.yellowBright("-> CONCAT: append one string to another"))
    console.log(clc.yellowBright("-> FIND: find specific characters inside the string"))
    console.log(clc.yellowBright("-> UPPERCASE: makes the string all uppercase"))
    console.log(clc.yellowBright("-> LOWERCASE: makes the string all lowercase"))
    ask()
}