//Questão 04

function subtrair(){
    let ano2050 = 2050
    let idadeNasc1 = window.document.getElementById('idadeNasc')

    let idadeNasc2 = Number(idadeNasc1.value)
    let s = ano2050 - idadeNasc2
    let s2 = window.document.getElementById('res')
    s2.innerHTML = `Sua idade em 2050 será: ${s}`

}

//Questão 06

let temperatura1 = 26
var  img1 = window.document.getElementById('fotos')
var clima = window.document.getElementById('clima')
var temp1 = window.document.getElementById('temperatura')

  if(temperatura1 >= 30){
    clima.innerHTML = "Clima: Quente"
    temp1.innerHTML = `Temperatura: ${temperatura1} °C`
  
}
 else{
    if(temperatura1 >= 18){
     clima.innerHTML = "Clima: Agradável"
     temp1.innerHTML = `Temperatura: ${temperatura1} °C`
     img1.src = 'imagens/agradavel.jpg'}

    else{
    clima.innerHTML = "Clima: Frio"
    temp1.innerHTML = `Temperatura: ${temperatura1} °C`
    img1.src = 'imagens/frio.jpeg'}
 }

//Questão 10

let msg1 = "A persistência leva ao sucesso!"
let msg2 = "Nunca desista dos seus sonhos!"
let msg3 = "Faça hoje o que vai te dar orgulho amanhã!"
let random = Math.floor(Math.random()*3);
var texto = window.document.getElementById('msgs')

    if (random === 0) {
        texto.innerHTML = `${msg1}`
    } else {
        if (random === 1){
           texto.innerHTML = `${msg2}`
        }
        else {
          texto.innerHTML = `${msg3}`
      } 
    }


//Questão 13

function media(){
let N1 = window.document.getElementById ('nota1')
let N2 = window.document.getElementById ('nota2')
let N3 = window.document.getElementById ('nota3')

let Nota1 = Number(N1.value)
let Nota2 = Number(N2.value)
let Nota3 = Number(N3.value)


let soma = Nota1 + Nota2 + Nota3 
let mediaFinal = (soma / 3).toFixed(2)

let resultado = window.document.getElementById('media1')
resultado.innerHTML = `Sua média é ${mediaFinal}`
}

//Questão 17
function aumento(){

    let SA1 = window.document.getElementById('salarioAtual')
    let aumento1 = 20
    let salarioatual1 = Number(SA1.value) 

    let mult = aumento1 * salarioatual1
    let divis = (mult / 100)
    let resultadoFinal = salarioatual1 + divis 

    let resultado1 = window.document.getElementById ('novoS')
   
      resultado1.innerHTML =  
           `<p>Salário atual: R$ ${salarioatual1.toFixed(2)}</p>
            <p>Aumento: 20%</p>
            <p>Novo salário: R$ ${resultadoFinal.toFixed(2)}</p>`
        
}

//Questão 19
function idade(){
    let idade = window.document.getElementById('idadeVotar')
    let idade1 = Number(idade.value)
    let resul = window.document.getElementById('txt')
    if(idade1 >= 16){
        
        resul.innerHTML = `<p>Idade: ${idade1} anos </p>
                           <p>Você pode votar!</p>`
    }
    else{
        resul.innerHTML = `<p>Idade: ${idade1} anos </p>
                           <p>Você não pode votar!</p>`
    }
}
