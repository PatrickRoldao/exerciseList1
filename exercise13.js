/*

13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.

 */

const prompt = require("prompt-sync")()

let sum = 0
let counter = 0

while(true){
  let numbery = parseFloat(prompt("Insira um número decimal para começar e 0 para terminar: "))
  if(numbery === 0){
    break;
  }
  sum += numbery
  counter++

}

if(counter > 0){
  let average = sum / counter

  console.log(`A média aritmetica destes números é: ${average}`)
} else {

  console.log("Nenhum número foi digitado. ")

}

/*

Este programa eu comecei declarando uma variavel sum e counter, aonde vou guardar a soma dos numeros
digitados pelo usuário e para contar quantos números foram digitados, em seguida uma lógica com while
que vai ser um loop infinito que vai rodar até ser pausado manualmente com o 0 e por ultimo um if else
aonde vai ser calculada a média dos números digitados.

 */