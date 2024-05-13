var readline = require('readline-sync')
var celsius = readline.question("Digite uma temperatura em celsius:")
fahrenheit = (celsius * 1.8) + 32
console.log(fahrenheit)