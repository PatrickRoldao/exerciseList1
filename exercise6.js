/*

6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

 */

const prompt = require("prompt-sync")()

function triangleCheker() {
  
let A = parseFloat(prompt("Digite o valor do lado A:"))
let B = parseFloat(prompt("Digite o valor do lado B:"))
let C = parseFloat(prompt("Digite o valor do lado C:"))

 
if(A < B + C && B < A + C && C < A + B){
if (A === B && B === C){
 console.log("Triângulo Equilátero: possui todos os lados iguais.")

} else if (A === B || A === C || B === C){
  console.log("Triângulo Isósceles: possui dois lados iguais.")

} else {
  console.log("Triângulo Escaleno: possui todos os lados diferentes.")
}

} else {
  console.log("Os valores fornecidos não formam um triângulo.")
  }
}

triangleCheker()

/*
Explicação:

Neste programa coloquei um prompt para o usuário digitar os lado A,B e C do triangulo para a minha function triangleCheker
com parseFloat(para converter a string em número) verificar que tipo de triangulo é este usando if-else para 
determinar se seria Isosceles, escaleno ou equilatero e por fim só chamei a função triangleChecker 
com a resposta solicitada.
*/
