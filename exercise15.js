/*

15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.

 */

let num1 = 0
let num2 = 1

console.log(num1)
console.log(num2)

for(let i = 2; i < 10; i++){
  let next = num1 + num2

  console.log(next)

  num1 = num2;
  num2 = next;

}

/*

Neste programa eu começei declarando duas variaveis para guardar 0 e 1 que é o inicio da sequencia de
Fibonacci que seram exibidos por um console log e depois no meu loop "for" vai contar do terceiro número
até o décimo, toda vez que que o loop entra ele calcula o próximo número da sequencia somando os 2
anteriores.

 */