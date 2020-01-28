const inquirer = require('inquirer');

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
            console.log(d.getFullYear())
            ask()
        }else if(command === "MONTH"){
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            console.log(months[d.getMonth()])
            ask()
        }else if(command === "DATE"){
            console.log(d.getDate())
            ask()
        }else if(command === "HOUR"){
            console.log(d.getHours())
            ask()
        }else if(command === "MINUTE"){
            console.log(d.getMinutes())
            ask()
        }else if(command === "SECOND"){
            console.log(d.getSeconds())
            ask()
        }else if(command === "MILLISECOND"){
            console.log(d.getMilliseconds())
            ask()
        }else if(command === "WEEKDAY"){
            const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            console.log(weekdays[d.getDay()])
            ask()
        }
        else{
            console.log("Invalid Input")
            ask();
        }
    })
}