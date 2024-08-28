/*

7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

 */

const prompt = require("prompt-sync")()
let quantityApples = Number(prompt("Digite quantas maças você compou: "))

function priceCalculator(quantityApples) {
let applesPrice

  
if(quantityApples < 12) {
  applesPrice = 0.30
} 
  
else {
  applesPrice = 0.25
}

let total = quantityApples * applesPrice

return total

}

let purchaseTotal = priceCalculator(quantityApples)
console.log("O valor que você gastou comprando maças foi de R$ " + purchaseTotal.toFixed(2))

/*
Explicação:

Neste programa coloquei um prompt para o usuário digitar a quantidade de maças que ele comprou com Number no prompt para
garantir que o mesmo vai digitar um número, em seguida criei uma calculadora para calcular o preço das maças vezes
a sua quantidade, usei também if else pois dependendo da quantidade de maças o seu preço muda e por último declarei 
uma ultima variavel que seria o valor total da compra sendo iqual a calculadora chamando em um console.log com 
toFixed por que eu queria garantir que apareceria duas casas decimais.

*/