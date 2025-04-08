const prompt = require(`prompt-sync`)();

let produtos = [];
let alugueis = [];
let produtosEscolhidos = []; 

function cadastrarProdutos() {
    console.log("\n --- Cadastrar Produto ---");
   
    let nome = prompt("Nome do produto: ");
    let tipo = prompt("Tipo do produto (ex: mouse, teclado): ");
    let preco = parseFloat(prompt("Preço do produto (R$): "));
   
    produtos.push({ nome, tipo, preco });
    console.log("Produto cadastrado com sucesso!");
   }

function listarProdutos(){
    console.log("\n --- Lista de Produtos ---");

 if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
    } 
    
else {

    produtos.forEach((produto, index) => {
    console.log(`${index + 1}. ${produto.nome} -
    ${produto.tipo}-${produto.preco.toFixed(2)}`);
    });
    }
}

function cadastroUsuario(){
    console.log("\n --- Cadastro de Usuário ---");

    let nomeCadastro = prompt("Digite seu nome: ");
    let email = prompt("Digite seu email: ");
    let senha = prompt("Digite sua senha: ");
    console.log("O usuario foi cadastrado com sucesso!");
}

function produtosDisponiveis() {
    console.log("\n --- Lista de Produtos ---");
    
    if (produtos.length === 0) {
        console.log("Nenhum produto disponível.");
    } else {
        produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - ${produto.tipo} - R$ ${produto.preco.toFixed(2)}`);
        });

        let escolha = parseInt(prompt("Digite o número do produto que deseja adicionar ao carrinho (ou 0 para voltar): "));
        
        if (escolha > 0 && escolha <= produtos.length) {
            let produtoSelecionado = produtos[escolha - 1];
            produtosEscolhidos.push(produtoSelecionado);  
            console.log(`\n✅ Produto "${produtoSelecionado.nome}" adicionado ao carrinho!`);
        } else if (escolha === 0) {
            console.log("Voltando ao menu...");
        } else {
            console.log("❌ Opção inválida! Tente novamente.");
        }
    }
}



function carrinhoUsuario(){ 
    console.log("\n--- Carrinho de Compras ---");
    if (produtosEscolhidos.length === 0) {
        console.log("Nenhum produto no carrinho.");
    } else {
        let total = 0;
        produtosEscolhidos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - ${produto.tipo} - R$ ${produto.preco.toFixed(2)}`);
            total += produto.preco;
        });

        console.log(`\n💰 Total da compra: R$ ${total.toFixed(2)}`);
        console.log("Ir para o pagamento -> ");
    }
}


function menu() {
     let opcao;
     do {
         console.log(`Bem-vindo à chauPi! O melhor para o seu pc turbinado!`)
         console.log(`======chauPi======`);
         console.log(` 1 - Cadastrar Produto`);
         console.log(`2 - Listar Produtos`);
         console.log(`3 - Cadastro de Usuário`);
         console.log(`4 - Produtos Disponíveis`);
         console.log(`5 - Carrinho de compras`);
         console.log(`0 - Sair`);
         
         opcao = prompt("Escolha uma opção:");
         
         switch (opcao) {
             case '1':
                 cadastrarProdutos();
                 break;
             case '2':
                 listarProdutos();
                 break;
             case '3':
                 cadastroUsuario();
                 break;
             case '4':
                 produtosDisponiveis();
                 break;
             case '5':
                 carrinhoUsuario();
                 break;
             case '0':
                 console.log("Saindo do sistema...");
                 break;
         }
     } while (opcao !== '0');
 }
 
 menu();
 