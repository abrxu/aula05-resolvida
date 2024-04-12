// 15. Seguindo algoritmo do documento em PORTUGOL

// 16. TESTE DE MESA
// a:1 | b:2 | c:3 Resultado: Não foi possível montar um triângulo
// a:3 | b:4 | c:5 Resultado: Triângulo Escaleno
// a:2 | b:2 | c:4 Resultado: Não foi possível montar um triângulo
// a:4 | b:4 | c:4 Resultado: Triângulo Equilátero
// a:5 | b:3 | c:3 Resultado: Triângulo Isósceles

const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Qual o valor de A? "))
const b = parseFloat(prompt("Qual o valor de B? "))
const c = parseFloat(prompt("Qual o valor de C? "))
let mens = ''

if ((a < b + c) && (b < a + c) && (c < a + b)) {
  if (a == b && b == c) {
    mens = "Triângulo Equilátero"
  }
  else if ((a == b) || (b == c) || (a == c)) {
    mens = "Triângulo Isósceles"
  }
  else {
    mens = "Triângulo Escaleno"
  }
}
else {
  mens = "Não foi possível formar um triângulo"
}

console.log(mens)