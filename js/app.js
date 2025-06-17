
let totalDeTudo = 0;
limpar();

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeDoProduto = produto.split("-")[0];
    let valorDeUmProduto = produto.split("R$")[1];
    let quantidadeDoProduto = document.getElementById("quantidade").value;

    let preco = quantidadeDoProduto * valorDeUmProduto;

    let produtosCarrinho = document.getElementById("lista-produtos")
    produtosCarrinho.innerHTML =  produtosCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeDoProduto} <span class="texto-azul">${preco}</span>
        </section>`
    
    totalDeTudo = totalDeTudo + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalDeTudo}`;
    document.getElementById("quantidade").value = 0;

}

function limpar() {
   totalDeTudo = 0;
   document.getElementById("lista-produtos").innerHTML = "";
   document.getElementById("valor-total").innerHTML = "R$ 0";
    }