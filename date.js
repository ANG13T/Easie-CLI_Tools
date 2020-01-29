const inquirer = require('inquirer');
const clc = require('cli-color');

var askComand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Command:'
    }
  ];

  console.log("Welcome to Easy Date Service")
  console.log("Type in \"help\" if you need to know the commands")
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
        }else if(command === "HELP"){
            help()
        }
        else{
            console.log(clc.redBright("Invalid Input"))
            ask();
        }
    })
}

function help(){
    console.log(clc.yellowBright("-> YEAR: finds current year"))
    console.log(clc.yellowBright("-> MONTH: finds current month"))
    console.log(clc.yellowBright("-> DATE: finds current day"))
    console.log(clc.yellowBright("-> HOUR: finds current hour"))
    console.log(clc.yellowBright("-> MINUTE: finds current minute"))
    console.log(clc.yellowBright("-> SECOND: finds current second"))
    console.log(clc.yellowBright("-> MILLISECOND: finds current millisecond"))
    console.log(clc.yellowBright("-> WEEKDAY: finds current day of the week"))
    ask()
}