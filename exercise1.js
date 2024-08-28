/*

 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.

 */

const prompt = require("prompt-sync")()

let num7 = Number(prompt("Insira um número inteiro para verificar se ele é par ou ímpar: "))

if(num7 % 2 === 0){
  console.log("Este número é par.")
} if(num7 % 2 !==0){
  console.log("Este número é impar.")
} 

/*
Explicação:

Colequei o prompt, para capturar dados do terminal que o usuário deseja verificar
em seguida a minha variavel vai verificar se o modulo deste número inteiro vai ser identico a 0, se for vai ser par
caso for diferente estrito vai ser impar.

*/