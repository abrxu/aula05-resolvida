// Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’. 

const prompt = require('prompt-sync')();

const usuarioPadrao = 1234
const senha = 9999
let entradaSenha = 0

const entradaUsuario = Number(prompt("Digite o código de usuário: "))

if (entradaUsuario !== usuarioPadrao) {
  console.log("Usuário invalido!")
} else {
  entradaSenha = Number(prompt("Qual é a senha deste usuário? "))
    if (entradaSenha !== senha) {
      console.log("Senha incorreta!")
    } else {
      console.log("Acesso permitido.")
    }
}