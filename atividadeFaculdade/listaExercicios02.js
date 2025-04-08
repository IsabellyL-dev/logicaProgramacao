const prompt = require('prompt-sync')();


// //Questão 01
let numero = parseFloat(prompt('Digite um número: '))
if(numero > 0){
    console.log(`Este número é positivo!`)
}
else if(numero < 0){
    console.log(`Este número é negativo!`)
}
else if(numero === 0){
    console.log('O numero é 0!')
}
else{
    console.log(`[ERRO] Você digitou um número inválido!`)
}

//Questão 02
for(let i = 0; i < 5; i++ ){
    console.log(`Olá Mundo!`)
}

// Questão 03
let idade = parseFloat(prompt(`Qual sua idade? `))
if(idade >= 16){
    console.log(`Você pode votar!`)
}
else{
    console.log(`Você não pode votar!`)
}

//Questão 04
let nota = parseFloat(prompt(`Informe sua nota: `))
if (nota >= 9 && nota < 10) {
    console.log('A - Excelente!');
} 
else {
    if (nota >= 7 && nota < 9) {
        console.log('B - Bom!');
    } 
    else {
        
        if (nota >= 5 && nota < 7) {
            console.log('C - Regular!');
        } 
        
    else {
        if (nota < 5) {
                console.log('D - Reprovado!');
            }
        }
    }
}

//Questão 05
let number = parseFloat(prompt(`Digite um número e descubra a sua tabuada! `))
for (let i = 1; i <= 10; i++){
    let res = number * i
    console.log(`A tabuada de ${number} é ${number}x${i}= ${res}`)
}

//Questão 06
let idade1 = parseFloat(prompt(`Qual sua idade? `))
let habil = prompt(`Você possui carteira de habilitação? `)

if(idade1 >= 18 && habil === "Sim"){
    console.log(`Você pode dirigir!`)
}
else{
    console.log(`Você não pode dirigir!`)
}

// //Questão 07 
let num1 = parseFloat(prompt(`Digite um número: `))
let num2 = parseFloat(prompt(`Digite outro número: `))
let res = num1 + num2

console.log(`A soma entre ${num1} e ${num2} é: ${res}`)


// // Questão 08
function calcularMedia(n1,n2,n3){
 return (n1 + n2 + n3) / 3
}
let res2 = parseFloat((4,4,3));
console.log(`A sua media é: ${res2}`)

// //Questão 09
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
for(let i = 0; i < 3; i++){
    console.log(aluno[i])
}
   


//Questão 15
let nome = prompt("Digite seu nome: ")
let idade2 = prompt("Digite sua idade: ")
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




