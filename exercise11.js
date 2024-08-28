/*

11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.

 */

const prompt = require("prompt-sync")()

let sum = 0

for(let i = 1; i <= 5; i++){
  let number1 = parseFloat(prompt(`Digite um número: `))
  
  sum += number1
}

console.log(`O resultado da soma é: ${sum} `)

/*

Neste programa eu inseri um prompt para o usuário inserir os 5 números, declarei a variavel "sum" 0 
que vai guardar a soma dos números feita pelo meu loop no for que vai repetir 5 vezes e ir somando 1 
em cada uma delas, usei parseFloat para que seja digitado números decimais e por fim um console.log para
apresentar o resultado da soma dos 5 números inseridos.

 */