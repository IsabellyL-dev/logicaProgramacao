let tentativa1 = 8
let tentativa2 = 9
let tentativa3 = 10
let numeroCorreto = 10
if(tentativa1 === numeroCorreto || tentativa2 === numeroCorreto || tentativa3 === numeroCorreto){
    console.log("Parabéns voce acertou o chute!")
}
else{
    console.log("Que pena! Voce errou o chute!")
}

let numeroCorreto1 = 7;
let tentativa5 = 9;
let tentativa4 = 7;

if(tentativa5 === numeroCorreto1 /*FALSO*/ ||/*ou*/ tentativa4 === numeroCorreto1/*verdade*/ ){
    console.log("Parabéns! VocÊ acertou!");
}else{
    console.log("Que pena! O número correto era:", numeroCorreto1);
}