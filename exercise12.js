/*

12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.

 */

const prompt = require("prompt-sync")()

let numberx = parseInt(prompt("Qual número você deseja ver a tabuada?: "))

console.log(`Tabuada do ${numberx}`)

for(let i = 1; i <= 10; i++){
  let result = numberx * i

  console.log(`${numberx} * ${i} = ${result}`)
}

/*

Neste programa eu inseri um prompt para o usuário inserir o número que ele deseja ver a tabuada com 
parseInt para que a string seja tratada como um número decimal depois usei uma mesma logica de loop 
usada nos outros exercicios aonde a variavel i é 1 para que o loop comece em 1 e i <= 10 para que este
loop seja executado 10 vezes, sendo incrementado com o i++ e por ultimo exibindo tudo em um 
console.log com aspas simples para usar um template.

 */