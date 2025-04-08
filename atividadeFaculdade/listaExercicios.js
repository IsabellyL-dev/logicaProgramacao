/* !Deixei as questões mais simples aqui e as outras usei html e css para melhorar! */

//Questão 01
let nome = "Luan"
console.log(`Bem-vindo às minhas atividades de JavaScript, professor ${nome}!`)

//Questão 02
let evento = "Workshop de Javascript"
let data = "15/08/2025"
let local = "Sala 101"
console.log(`Evento: ${evento}`)
console.log(`Data: ${data}`)
console.log(`Local: ${local}`)

//Quetsão 03
let nome1 = "Isabelly"
let idade1 = 25
let profissao = "Desenvolvedora Front-end"
console.log(`Nome: ${nome1} | Idade: ${idade1} | Profissão: ${profissao}`)


//Questão 05
console.log("======================")
console.log("SISTEMA DE CADASTRO")
console.log("======================")
 

//Questão 07
let hora = 14
let minuto = 35
let segundo = 50
console.log(`Hora atual: ${hora}:${minuto}:${segundo}`)

//Questão 08
console.log(`Inciando em ...`)
for(let i = 5; i >= 1; i--){
   console.log(i)   
}
console.log(`Vai!`)

//Questão 09
console.log(`Ranking:`)
console.log(`1°- Maria`)
console.log(`2°- Lucas`)
console.log(`3°- Fernanda`)



//Questão 11
console.log(`Segunda-feira | Terça-feira | Quarta-feira | Quinta-feira | Sexta-feira`)

//Questão 12
let um = "Hambúrguer"
let dois = "Pizza"
let tres = "Suco"
console.log(`1. ${um} - 15,00`)
console.log(`2. ${dois} - 25,00`)
console.log(`3. ${tres} - 5,00`)



//Questão 14
let mensagem = "O sucesso é a soma de pequenos esforços repetidos dia após dia."
console.log(mensagem)

//Questão 15
let numeroAletorio =  Math.floor(Math.random()*100);
console.log(`Número sorteado ${numeroAletorio}`)

//Questão 16 
let num = 5
console.log(`${num} x 1 = 5`)
console.log(`${num} x 2 = 10`)
console.log(`${num} x 3 = 15`)
console.log(`${num} x 4 = 20`)
console.log(`${num} x 5 = 25`)
console.log(`${num} x 6 = 30`)
console.log(`${num} x 7 = 35`)
console.log(`${num} x 8 = 40`)
console.log(`${num} x 9 = 45`)
console.log(`${num} x 10 = 50`)

//Questão 18
console.log("------------------------------")

//Questão 20

function vendas(estoque, venda){
     return estoque - venda
}
let estoqueAtual = vendas(100,20)
console.log(`Estoque inicial: 100 unidade`)
console.log(`Venda realizada: 20 unidades`)
console.log(`Estoque atualizado: ${estoqueAtual} unidades`)