/*

2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.

 */

const prompt = require("prompt-sync")()

let age = Number(prompt("Informe a idade que deseja verificar: "))

if(age >= 0 && age <= 12){
  console.log("Criança.")

} else if(age >= 13 && age <= 17){
  console.log("Adolescente.")

} else if(age >= 18 && age <= 60){
  console.log("Adulto.")

} else {console.log("Idoso. ")}

/*
Explicação:

Colequei o prompt, para capturar os dados do digitados pelo usuário e em seguida a minha variavel em if-else irá verificar
as idades considerando:
de 0 a 12 anos criança
de 13 a 17 anos adolescente
de 18 a 60 anos adulto 
e oque tiver mais de 60 anos já entra como idoso.

*/