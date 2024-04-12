// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

const prompt = require('prompt-sync')();

let time1, gols1, time2, gols2

function perguntarNomes() {
  time1 = String(prompt("Digite o nome do time 1: "))
  gols1 = Number(prompt("Digite o número de gols do time 1: "))
  time2 = String(prompt("Digite o nome do time 2: "))
  gols2 = Number(prompt("Digite o número de gols do time 2: "))
}

perguntarNomes()

if (gols1 > gols2) {
  console.log("O time " + time1 + " venceu!")
}
else if (gols2 > gols1) {
  console.log("O time " + time2 + " venceu!")
}
else if (gols1 == gols2) {
  console.log("Os times empataram!")
}