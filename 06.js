// 6. Reescrever algoritmo que está em Portugol no documento.
// TABELA DE RESULTADOS: 
// X=3 Y=2 -> Z=11 RESPOSTA=B
// X=150 Y=3 -> Z=455 RESPOSTA=C
// X=7 Y=-1 -> Z=-2 RESPOSTA=A
// X=-2 Y=5 -> Z=-5 RESPOSTA=A
// X=50 Y=3 -> Z=155 RESPOSTA=C

const prompt = require('prompt-sync')();

let x = Number(prompt("Defina o valor de X: "))
let y = Number(prompt("Defina o valor de Y: "))
let resposta = ''

let z = (x * y) + 5

if (z <= 0) {
  resposta = "A"
}
else if (z <= 100) {
  resposta = "B"
}
else {
  resposta = "C"
}

console.log("O VALOR DE Z É: " + z + " A RESPOSTA É: " + resposta)