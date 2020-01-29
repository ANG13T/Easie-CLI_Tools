const inquirer = require('inquirer');
const clc = require('cli-color');

var askComand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Command:'
    }
  ];

  ask()

function ask(){
    inquirer.prompt(askComand).then(answers => {
        var command = answers.command.toString().toUpperCase();
        var d = new Date();

        if(command === "YEAR"){
            console.log(clc.greenBright(d.getFullYear()))
            ask()
        }else if(command === "MONTH"){
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            console.log(clc.greenBright(months[d.getMonth()]))
            ask()
        }else if(command === "DATE"){
            console.log(clc.greenBright(d.getDate()))
            ask()
        }else if(command === "HOUR"){
            console.log(clc.greenBright(d.getHours()))
            ask()
        }else if(command === "MINUTE"){
            console.log(clc.greenBright(d.getMinutes()))
            ask()
        }else if(command === "SECOND"){
            console.log(clc.greenBright(d.getSeconds()))
            ask()
        }else if(command === "MILLISECOND"){
            console.log(clc.greenBright(d.getMilliseconds()))
            ask()
        }else if(command === "WEEKDAY"){
            const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            console.log(clc.greenBright(weekdays[d.getDay()]))
            ask()
        }
        else{
            console.log(clc.redBright("Invalid Input"))
            ask();
        }
    })
}