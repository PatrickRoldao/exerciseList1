/*

14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.

 */

const prompt = require("prompt-sync")()

let numberH = Number(prompt("Digite um número para calcular o fatorial: "))
let factorial = 1
let i = 1

while(i <= numberH){
  factorial *= i
  i++

}
console.log(`O fatorial de ${numberH} é: ${factorial}`)

/*

Neste programa eu começei declarando as variaveis que vou usar na minha lógica de loop no while aonde
o número que vai ser digitado pelo usuário vai estar neste loop acrescentando 1 (i++) até que ele
seja menor ou igual ao número digitado pelo usário, lembrnado que o fatorial de um número é o resultado
da multiplicação deste número por todos os números menores que ele até chegar a 1.

 */