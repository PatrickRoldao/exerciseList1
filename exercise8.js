/*

8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.

 */

const prompt = require("prompt-sync")()

let number1 = Number(prompt("Informe o primeiro número: "))
let number2 = Number(prompt("Informe o segundo número: "))

if(number1 === number2){
  console.log("Este programa não funciona com valores iguais. ")

} else {

if(number1 < number2){

  console.log("Números em ordem crescente: " + number1 + number2)

} else {
  console.log("Números em ordem crescente: " + number2 + number1)
}
}

/*
Explicação:

Neste programa coloquei um prompt para o usuário digitar dois números com "Number" no prompt para garantir que o usuário 
vai inserir um número e não uma string, depois nos if else fiz a logica para que se os números forem identicos o sistema
apresentar uam mensagem dizendo que o programa não funciona com números iguais e depois sim a lógica para colocar os 
números inseridos em ordem crescente apresentados por um console.log.

*/