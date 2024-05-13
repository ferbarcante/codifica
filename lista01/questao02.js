var readline = require('readline-sync')

let numEleitores = readline.question("Informe o número total de eleitores:");
let numVotosBrancos = readline.question("Informe o número de votos em branco:");
let numVotosNulos = readline.question("Informe o número de votos nulos:");
let numVotosValidos = readline.question("Informe o número de votos válidos:");

let percentualBrancos = (numVotosBrancos / numEleitores) * 100;
let percentualNulos = (numVotosNulos / numEleitores) * 100;
let percentualValidos = (numVotosValidos / numEleitores) * 100;

console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");