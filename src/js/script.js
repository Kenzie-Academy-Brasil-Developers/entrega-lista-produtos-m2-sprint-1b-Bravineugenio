const vitrine = document.querySelector(".containerListaProdutos")

function soma(array){
    let somaArray=0
    for(let i = 0; i < array.length; i++){ 
    somaArray = somaArray + array[i].preco;

}
return `${somaArray}`
}

function criarCard(array){
    
    const divCard = document.createElement("div");
    const ulCard = document.createElement("ul");
    divCarrinho = document.createElement("div");
    divCard.append(divCarrinho);
    divCarrinho.append(ulCard);

    array.forEach((array) => {
    const liCard = document.createElement("li");
    const imgCard = document.createElement("img");
    const h3Card = document.createElement("h3");
    const pCard = document.createElement("p");
    const spanCard = document.createElement("span");

    imgCard.src          = array.img;
    h3Card.innerText     = array.nome;
    pCard.innerText      = `R$${array.preco},00`
    spanCard.innerText   = array.categoria;
    ulCard.appendChild(liCard);
    liCard.append(imgCard,h3Card,pCard,spanCard)

    precoTotal.innerText = soma(produtos)

})
    vitrine.append(divCard)
}

criarCard(produtos)

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
        
        
    });
    divCarrinho.style.display= "none"
    criarCard(listaHortifruti);
    soma(listaHortifruti)
    console.log(soma(listaHortifruti))
    precoTotal.innerText = soma(listaHortifruti)
    
    
    
}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos);
function mostrarTodos() {
    
    divCarrinho.style.display= "none"
    return criarCard(produtos)
    
}

const botaoMostrarLaticinios = document.querySelector('.estiloGeralBotoes--filtrarLaticinios');
botaoMostrarLaticinios.addEventListener('click', filtrarPorLaticinios);
function filtrarPorLaticinios() {
    const listaLaticinio = produtos.filter((produto) => {
        return produto.secao === 'Laticínio';
        
        
    });
    divCarrinho.style.display= "none"
    criarCard(listaLaticinio);
    soma(listaLaticinio)
    precoTotal.innerText = soma(listaLaticinio)
    
}


const botaoMostrarPanificadora = document.querySelector('.estiloGeralBotoes--filtrarPanificadora');
botaoMostrarPanificadora.addEventListener('click', filtrarPorPanificadora);
function filtrarPorPanificadora() {
    const listaPanificadora = produtos.filter((produto) => {
        return produto.secao === 'Panificadora';
        
        
    });
    divCarrinho.style.display= "none"
    criarCard(listaPanificadora);
    soma(listaPanificadora)
    precoTotal.innerText = soma(listaPanificadora)
    
}

let texto = document.querySelector('.campoBuscaPorNome')
let botaoPesquisa = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')

botaoPesquisa.addEventListener('click', filtrarProduto)
function filtrarProduto(){
    const inputTexto = texto.value.toLowerCase()
    const produtoFiltrado = produtos.filter((products) => {
        if (inputTexto == products.nome.toLowerCase()){
            return products
        }
    })
    divCarrinho.style.display= "none"
    criarCard(produtoFiltrado)
    precoTotal.innerText = soma(produtoFiltrado)
}
