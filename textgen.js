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

  var askAmount = [
    {
      type: 'input',
      name: 'amount',
      message: 'How many times to repeat:'
    }
  ];

ask()

function ask(){
    inquirer.prompt(askComand).then(answers => {
        var command = answers.command.toString().toUpperCase();

        if(command === "REPEAT"){
            repeatString()
        }else if(command === "DELETE"){
            console.log("dsds") 
        }else if(command === "SLICE"){
            console.log("dsds")
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
                
            }else{
                console.log("Invalid Input")
                repeatString()
            } 
        })
    });
}
