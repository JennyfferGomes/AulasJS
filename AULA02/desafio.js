
//let nome, nota1, nota2, media;
// prompt()
//retorne qual a média do aluno.


let nome = prompt(`Qual o seu nome?`)
let nota1 = Number(prompt(`Digite sua 1º nota`))
let nota2  = Number (prompt(`agora me diga sua nota2:`))
//let nota2 = parseInt(prompt(`digite `))
let media = (nota1 + nota2) / 2
alert(`${nome}! sua média é: ${media}`)
