const prompt = require('prompt-sync')();

// Questão 08
function calcularMedia(n1,n2,n3){
 return (n1 + n2 + n3) / 3
}
let res = parseFloat((4,4,3));
console.log(`A sua media é: ${res}`)

//Questão 09
function ehPar(n1,n2){
    return n1 % n2
}
let num = ehPar(19,2)

if(num === 0){
    console.log(`True`)
}
else{
    console.log(`False`)
}

//Questão 10
let nomes =["Isabelly", "Karla", "Fellype", "Gabriel", "Aline"]
for(i = 0; i < 6; i++){
    console.log(nomes[i])
}

//Questão 11
let numeros = [1,2,3,4,5]
numeros.push(6)
numeros.shift(1)
console.log(numeros)

// Toda tabela tem que ter uma chave primaria
// Questão 12
let carro = ["Marca: BMW", "Modelo: BMW M3", "Ano: 2007", "Velocidade Maxima: 300km/h" ]
carro.forEach(function(carros)
{
    console.log(carros)
})


//Questão 13
const numbers = [10, 20, 30, 40, 50]
const numbers2 = numbers.map(function(multiplicar)
{
    return multiplicar * 2
})
console.log(numbers2)


//Questão 14
const aluno = ["Nome: Lucas", "Idade: 24", "Curso: Análise e desenvolvimento de sistemas"]
for(let chave in aluno){
    console.log(`${chave}`)
}
   


//Questão 15
let nome = prompt("Digite seu nome: ")
let idade = prompt("Digite sua idade: ")
let nota1 =  parseFloat(prompt("Digite a primeira nota: "))
let nota2 =  parseFloat(prompt("Digite a segunda nota: "))
let nota3 =  parseFloat(prompt("Digite a terceira nota: "))
let mediaNotas = (nota1 + nota2 + nota3) / 3
if(mediaNotas >= 7 ){
    console.log(`Parabéns! ${nome} você foi aprovado(a)!`)
}
else{
    console.log(`Infelizmente, ${nome} você foi reprovado(a)!`)
}





