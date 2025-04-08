function mostrarProdutosComPrompt() {
    console.log("\n --- Lista de Produtos ---");

    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
    } else {
        produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - ${produto.tipo} - R$ ${produto.preco.toFixed(2)}`);
        });

        let escolha = parseInt(prompt("Digite o número do produto que deseja visualizar (ou 0 para voltar): "));
        
        if (escolha > 0 && escolha <= produtos.length) {
            let produtoSelecionado = produtos[escolha - 1];
            console.log(`\nProduto Selecionado:`);
            console.log(`Nome: ${produtoSelecionado.nome}`);
            console.log(`Tipo: ${produtoSelecionado.tipo}`);
            console.log(`Preço: R$ ${produtoSelecionado.preco.toFixed(2)}`);
        } else if (escolha === 0) {
            console.log("Voltando ao menu...");
        } else {
            console.log("Opção inválida! Tente novamente.");
        }
    }
}