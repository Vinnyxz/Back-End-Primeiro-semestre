const prompt = require ('prompt-sync')();

const nome = prompt ('Qual seu nome ?')
const idade = prompt ('Qual sua idade?');
const curso = prompt (' Qual seu curso?');
const notaA1 = prompt('Qual sua nota A1 ?')
const notaA2 = prompt('Qual sua nota A2 ?')


console.log(`Olá ${nome}, seu curso é ${curso}`)
// console.log("Olá " + nome + "curso é " + curso)

if (idade >= 18 ){
console.log ("Você já e mais de idade")

} else {
    console.log ("Você ainda e menor de idade")
}

//console.log(notaA1 + notaA2)
//console média, se for maior que 7 apovado
// Transformando string recebida para number
const NotaA1num = Number(NotaA1)
const NotaA2num = Number(NotaA2)

const media = (notaA1 + notaA2) / 2

console.log("Média: " + media)

if (media >= 7 ){
console.log ("Aprovado")

} else {
    console.log ("Reprovado ")
}
