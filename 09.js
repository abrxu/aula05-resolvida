// 9. Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito:
// - Ter no mínimo 65 anos de idade. 
// - Ter trabalhado no mínimo 30 anos. 
// - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.


const prompt = require('prompt-sync')();

const ID = Number(prompt("Qual seu número de empregado (código)? "))
const birthYear = Number(prompt("Em que ano você nasceu? "))
const joiningYear = Number(prompt("Em que ano você entrou na empresa? "))

function approved() {
  console.log(  "Número do empregado: #" + ID
              + "\nVocê cumpriu todos os requesitos para a aposentadoria, deseja requerir a mesma?"
              + "\n1. Requerir aposentadoria"
              + "\n2. Não requerir aposentadoria"
              + "\n3. Sair do menu")
  const choose = Number(prompt("-> Digite a opção: "))
  switch (choose) {
    case 1:
      console.log("Aposentadoria requerida com sucesso!")
      break
    case 2:
      console.log("Requisição cancelada")
      break
    case 3:
      console.log("Saindo...")
      break
    default:
      console.log("Operação inválida!")
      break
  }
}

const age = 2024 - birthYear
const workTime = 2024 - joiningYear

if (age >= 60 && workTime >= 25 || age >= 65 || workTime >= 30) {
  approved()
}
else {
  console.log("Não conseguimos completar o processo pois você não cumpre os requesitos para aposentadoria! :(")
}