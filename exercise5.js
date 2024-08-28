/*

5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.

 */

 const prompt = require("prompt-sync")()
 
 let weight = Number(prompt("Digite o seu peso: "))
 let height = Number(prompt("Digite a sua altura: "))
 
 let imc = weight / (height * height)
 
 console.log("Seu IMC é: " + imc.toFixed(2));
 
 if (imc < 18.5){
   console.log("Você está abaixo do peso. ");
 } else if (imc >= 18.5 && imc < 24.9){
   console.log("Você está com um peso normal. ");
 } else if (imc >= 25 && imc < 29.9){
   console.log("Você está com sobrepeso. ");
 } else {
   console.log("Você está obeso. ");
 }

 /*
Explicação:

Neste programa coloquei um prompt para o usuário digitar o seu peso e outro para digitar a sua altura, estes dados
vão ser o meu IMC que vai ser a variavel que vai dividir o peso pela altura elevada ao quadrado, em seguida um
console.log para informar o resultado do IMC e em seguida if-else determinando em que categoria o usuário vai estar
dependendo do resultado do seu IMC, lembrando que:
Abaixo do peso: IMC < 18.5
Peso normal: IMC 18.5 - 24.9
Sobrepeso: IMC 25 - 29.9
Obesidade grau I: IMC 30 - 34.9

*/

