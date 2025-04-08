function cadastroUsuario(){
    let nome = prompt("Digite seu nome: ");
    let email = prompt("Digite seu email: ");
    let senha = prompt("Digite sua senha: ");
    console.log("O usuario foi cadastrado com sucesso!");
}




   function listarProdutos() {
    console.log("\n --- Lista de Produtos ---");
   
    if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
    } else {
   
    produtos.forEach((produto, index) => {
    console.log(`${index + 1}. ${produto.nome} -
   ${produto.tipo}-${produto.preco.toFixed(2)}`);
    });
    }
   }
   