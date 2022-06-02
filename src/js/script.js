const vitrine = document.querySelector(".containerListaProdutos")
const vitrine2 = document.querySelector(".carrinhoLista")
const vitrine3 = document.querySelector(".qtd");
const vitrine4 = document.querySelector(".valor");



function soma(array){
    let somaArray=0
    for(let i = 0; i < array.length; i++){ 
    somaArray = somaArray + array[i].preco;

}
return `${somaArray}`
}
let arrayCarrinho=[]

function criarCard(array){
    
    
    const valorQtd = document.createElement("span")
    const valorTotal = document.createElement("span")
    const divCard = document.createElement("div");
    const ulCard = document.createElement("ul");
    divCarrinho = document.createElement("div");
    divCard.append(divCarrinho);
    divCarrinho.append(ulCard);
    
    array.forEach((array) => {
    const liCard = document.createElement("li");
    const imgCard = document.createElement("img");
    const h3Card = document.createElement("h3");
    const spanCard = document.createElement("span");
    const pCard = document.createElement("p");
    const olCard = document.createElement("ol");
    const divOl = document.createElement("div")
    const compo1 = document.createElement("p")
    const compo2 = document.createElement("p")
    const compo3 = document.createElement("p")
    const compo4 = document.createElement("p")
    const botao = document.createElement("button")
    const div02 = document.createElement("div")
    const div03 = document.createElement("div")
    
    ulCard.classList.add("vitrineCarrinho")
    divOl.classList.add("divOl")
    liCard.classList.add("Products")
    div02.classList.add("div02")
    div03.classList.add("div03")
    botao.classList.add("botaoComprar")
    pCard.classList.add("pCardClass");

    imgCard.src          = array.img;
    h3Card.innerText     = array.nome;
    pCard.innerText      = `R$${array.preco}`
    spanCard.innerText   = array.secao;
    compo1.innerText   = `1.${array.componentes[0]}`
    compo2.innerText   = `2.${array.componentes[1]}`
    compo3.innerText   = `3.${array.componentes[2]}`
    if(array.componentes[3] !== undefined){
        compo4.innerText   = `4.${array.componentes[3]}`
    }
    ulCard.appendChild(liCard);
    div02.append(h3Card,spanCard)
    liCard.append(imgCard,div02,divOl,div03)
    divOl.appendChild(olCard)
    olCard.append(compo1,compo2,compo3,compo4);    
    div03.append(pCard,botao)

    botao.innerText = "Comprar"

    botao.addEventListener('click', apertar);
    function apertar() {
        pushProduto(array)
        valorQtd.innerText = arrayCarrinho.length
        console.log(arrayCarrinho);
        valorQtd.classList.add("valorQtd")
        valorTotal.classList.add("valortotal")
        valorTotal.innerText=soma(arrayCarrinho)

        const divCarrinho = document.createElement("div")
        const ulCarrinho = document.createElement("ul")
        const liCarrinho = document.createElement("li")
        const divImg1 = document.createElement("div")
        const imgDiv = document.createElement("img")
        const divInfoCarrinho = document.createElement("div")
        const pNomeCarrinho = document.createElement("p")
        const pSecaoCarrinho = document.createElement("p")
        const spanPreco = document.createElement("span")
        const divButton = document.createElement("div")
        const buttonRemover = document.createElement("button")

        
        divCarrinho.classList.add("carrinhoCompra2")
        ulCarrinho.classList.add("carrinhoLista")
        liCarrinho.classList.add("produtoCarrinho")
        divImg1.classList.add("divImg")
        imgDiv.classList.add("imgCarrinho")
        divInfoCarrinho.classList.add("infoCarrinhoProduto")
        pNomeCarrinho.classList.add("nomeProdutoCarrinho")
        pSecaoCarrinho.classList.add("secaoProdutoCarrinho")
        spanPreco.classList.add("precoProdutoCarrinho")
        buttonRemover.classList.add("remover")
        valorQtd.classList.add("valorQtd")
        valorTotal.classList.add("valortotal")
        
         console.log(array)
         imgDiv.src = array.img; 
         pNomeCarrinho.innerText = array.nome
         pSecaoCarrinho.innerText = array.secao
         spanPreco.innerText = array.preco
         buttonRemover.innerText = "X"
        
        divCarrinho.appendChild(ulCarrinho)
        ulCarrinho.appendChild(liCarrinho)
        liCarrinho.append(imgDiv,divInfoCarrinho,divButton)
        divButton.append(buttonRemover)
        divInfoCarrinho.append(pNomeCarrinho,pSecaoCarrinho,spanPreco)
        

        // imgDiv.src = montarImagem(array)

      buttonRemover.addEventListener('click', atualizarCarrinho);
      function atualizarCarrinho(event) {
      liCarrinho.style.display= "none"
      arrayCarrinho.pop(arrayCarrinho)
      valorQtd.innerText = arrayCarrinho.length
      soma(arrayCarrinho)
      valorTotal.innerText=soma(arrayCarrinho)
      }
        
        console.log(liCarrinho) 
        vitrine2.append(liCarrinho)


        vitrine3.append(valorQtd)
        vitrine4.append(valorTotal)
        console.log()
    }
    
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
        return produto.secao === 'Laticinio';
        
        
    });
    divCarrinho.style.display= "none"
    criarCard(listaLaticinio);
  
    
}


const botaoMostrarPanificadora = document.querySelector('.estiloGeralBotoes--filtrarPanificadora');
botaoMostrarPanificadora.addEventListener('click', filtrarPorPanificadora);
function filtrarPorPanificadora() {
    const listaPanificadora = produtos.filter((produto) => {
        return produto.secao === 'Panificadora';
    });
    divCarrinho.style.display= "none"
    criarCard(listaPanificadora);
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
    
}


function pushProduto(array){
     
    arrayCarrinho.push(array);
    
}

function montarImagem(array){
    return array.img
}

