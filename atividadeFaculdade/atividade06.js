 //Questão 01
 const listaCompras = ["Feijão", "Arroz", "Frango", "Macarrão", "Açucar",]
 listaCompras.forEach(function(comprar)
{
  console.log(`Comprar: ${comprar}`)
})

//Questão 02
const listaFuncionarios = ["João", "Lucas", "Gabrielly", "Ana", "Vitor","Michele"]
const maiusculo = listaFuncionarios.map(function(maiusculo)
{
    console.log(maiusculo.toUpperCase());
})

//Questão 03
const notas = [3,6,7,9,10,5,2,8]
const aprovados = notas.filter(function(nota)
{
    return nota >= 7; 
})
console.log(aprovados);

//Questão 04

for(i = 0; i < 5; i++){
    const vendas = [800, 900, 1500, 2000, 3500]
const comissao = vendas.map(function(venda)
{
    return venda * 0.10 
})
    console.log(`Parabéns! você conseguiu ${comissao[i]} reais de comissão por suas vendas!`);
}

//Questão 05 
const produtos = [
    { nome: "Blush", preco: 20.00, emPromocao: true },
    { nome: "Pinceis", preco: 30.00, emPromocao: true },
    { nome: "Batom", preco: 15.50, emPromocao: false },
    { nome: "BodySplash", preco: 45.60, emPromocao: false }
];

const produtoPromocao = produtos.filter(function(produto){
    return produto.emPromocao === true; 

});
console.log("Produtos em promoção de hoje:", produtoPromocao);

  

    



