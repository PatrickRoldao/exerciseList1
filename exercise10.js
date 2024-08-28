/*

10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

 */

const prompt = require("prompt-sync")()

let number10 = Number(prompt("Informe o número quer quer ver 10 vezes: "))

for(let i = 0; i < 10; i++) {
  console.log(number10)
}

/*

Neste programa eu inseri um prompt com "Number" para garantir que o usuário digite um número e usei a minha lógica for
para criar um loop que vai ir incrementando 10 vezes o número que deseja ser exibido.

 */