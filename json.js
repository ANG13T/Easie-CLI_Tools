const inquirer = require('inquirer');
const clc = require('cli-color');
var fullData = {}

var askCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Command:'
    }
  ];

  var askKey = [
    {
      type: 'input',
      name: 'key',
      message: 'Enter Key:'
    }
  ];

  var askValue = [
    {
      type: 'input',
      name: 'value',
      message: 'Enter Value:'
    }
  ];

  ask()

  function ask(){
    
    inquirer.prompt(askCommand).then(answers => {
        var command = answers.command.toString().toUpperCase().trim()
        if(command === "ADD"){
            addData()
        }else if(command === "VIEW"){
            viewData()
        }else if(command === "VIEWALL"){
            viewAllData()
        }else{
            console.log(clc.redBright("Invalid Command"))
            ask()
        }
    });
  }


  function addData(){
      var key = ""
      var value = ""
      inquirer.prompt(askKey).then(answers => {
        key = answers.key.toString();
        inquirer.prompt(askValue).then(answers => {
            value = answers.value.toString();
            fullData[key] = value
            ask()
        });
    });
  }

  function viewData(){
    var key = ""
    inquirer.prompt(askKey).then(answers => {
        key = answers.key.toString();
        console.log(clc.greenBright(fullData[key]))
        ask()
    });
  }

  function viewAllData(){
    console.log(clc.greenBright(fullData))
  }