/*

4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.

 */

console.log("1. Michael Jackson:")
console.log("2. Bon Jovi")
console.log("3. Roberto Carlos")

const prompt = require("prompt-sync")()
let singer = Number(prompt("Informe qual destes cantores marcou sua infância: "))
 
 switch(singer){
   case 1:
     console.log("O Cantor que marcou a sua infância foi Michael Jackson. ")
     break
   case 2:
     console.log("O Cantor que marcou a sua infância foi Bon Jovi. ")
     break
   case 3:
     console.log("O Cantor que marcou a sua infância foi Roberto Carlos. ")
     break
   default:
     console.log("Você não escolheu nenhuma das opções. ")
     break
 }

/*
Explicação:

Neste programa coloquei consoles.log mostrando o menu de opções para o usuário escolher qual cantor mais marcou a sua
infância, embaixo um prompt para o mesmo inserir o número do cantor e por fim um switch case com as opções que vão devolver
para ele o cantor escolhido.

*/