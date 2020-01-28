const inquirer = require('inquirer');

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
        }else{
            console.log("Invalid Input")
            ask();
        }
    })
}

function repeatString(){
    var repString = "";
    var repAmount = 0;

    inquirer.prompt(askString).then(answers => {
        repString = answers.string.toString();
        console.log(repString)
        inquirer.prompt(askAmount).then(answers => {
            var amount = answers.amount;
            if(amount % 1 === 0){
                repAmount = amount;
                for(var i = 0; i < repAmount; i++){
                    console.log(repString)
                }
                ask()
                
            }else{
                console.log("Invalid Input")
                repeatString()
            } 
        })
    });
}


function reverseString(){
    inquirer.prompt(askString).then(answers => {
        var revString = answers.string.toString();
        console.log(revString.split('').reverse().join(''))
        ask()
    });
}

function stringLength(){
    inquirer.prompt(askString).then(answers => {
        var lenString = answers.string.toString();
        console.log(lenString.length)
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
            console.log(firstString + secondString)
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
                console.log(findString.search(indexString))
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
                        console.log(splString.slice(startSplice,endSplice))
                        ask()
                    }else{
                        console.log("Invalid Command")
                        spliceString()
                    }
                });
            } else{
                console.log("Invalid Command")
                spliceString()
            }
        });
    });

}

function uppercaseString(){
   var upperString = ""
    inquirer.prompt(askString).then(answers => {
        upperString = answers.string.toString();
        console.log(upperString.toUpperCase())
    });
}

function lowercaseString(){
    var lowerString = ""
    inquirer.prompt(askString).then(answers => {
        lowerString = answers.string.toString();
        console.log(lowerString.toLowerCase())
    });
}