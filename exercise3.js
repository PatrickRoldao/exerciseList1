/*

3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

 */

const prompt = require("prompt-sync")()

let score = Number(prompt("Informe a nota que deseja verificar: "))

if(score >= 0 && score <= 3){
  console.log("Reprovado. ")

} else if(score >= 4 && score <= 6){
  console.log("Recuperação. ")

} else {console.log("Aprovado. ")} 

/*
Explicação:

Colequei o prompt, para capturar os dados do digitados pelo usuário e em seguida a minha variavel em if-else irá verificar
as notas considerando:
nota de 0 a 3 reprovado.
nota de 4 a 6 recuperação.
nota 7 em diante aprovado.

*/