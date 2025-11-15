const botaoCardapio = document.querySelector('#foreach')
const modal = document.querySelector('#modal')
const conteudoCardapio = document.querySelector('#conteudo-cardapio')
const botoesFiltro = document.querySelector('#botoes-filtro')
const carrinhoCompras = document.querySelector('#carrinho-compras')
const botaoLanches = document.querySelector('#botao-lanches')
const botaoBebidas = document.querySelector('#botao-bebidas')
const botaoSobremesas = document.querySelector('#botao-sobremesas')
const botaoHamburgueres = document.querySelector('#botao-hamburgueres')
const valorTotalElemento = document.querySelector('#valor-total')
const botaoDesconto = document.querySelector('#map')
const botaoFinalizar = document.querySelector('#finalizar-compra')
const botaoPromocao = document.querySelector('#filter')

let carrinho = []
    
botaoCardapio.onclick = () => mostrarCardapio(hamburgueres)

botaoHamburgueres.onclick = () => mostrarCardapio(hamburgueres)
botaoLanches.onclick = () => mostrarCardapio(lanches)
botaoBebidas.onclick = () => mostrarCardapio(bebidas)
botaoSobremesas.onclick = () => mostrarCardapio(sobremesas)

function mostrarCardapio(lista) {

    modal.classList.add('hidden');

    let myList = "<ul>"

    lista.forEach ((item) => {
        myList += `
                <li class="item-cardapio" data-preco="${item.preco}" title="${item.title}">
                    <img class="img-cardapio" src="${item.src}" alt="${item.nome}">
                    <p class="produto">${item.nome}</p>
                    <p class="preco">R$ ${item.preco.toFixed(2)}</p>
                    <p class="descricao">${item.descricao}</p>
                </li>
        `
    })
    myList += "</ul>"

    conteudoCardapio.innerHTML = myList

    document.querySelectorAll(".item-cardapio").forEach(item =>{
        item.addEventListener("click", () =>{
            const preco = parseFloat (item.getAttribute("data-preco"))
            adicionarAoCarrinho({preco})
        })
    })

    setTimeout(() => { conteudoCardapio.classList.add('show')}, 500);
    setTimeout(() => { botoesFiltro.classList.add('show')}, 700);
    setTimeout(() => { carrinhoCompras.classList.add('show')}, 900);
}


function adicionarAoCarrinho(item) {
    carrinho.push(item);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    valorTotalElemento.textContent = `${total.toFixed(2)}`;
}

function desconto(){
    const precoNovo = carrinho.map (produto => ({ 
        preco: produto.preco *0.9 }))

        carrinho = precoNovo

        atualizarCarrinho()
}

botaoPromocao.onclick = () => {
    const promo = cardapioArrays.filter(item => item.preco <= 20)
    mostrarCardapio(promo)
}

botaoDesconto.addEventListener('click', desconto)

botaoFinalizar.addEventListener('click', () => {
    alert('Compra finalizada! Obrigado por escolher o Pop Burguer!')
    valorTotalElemento.textContent = '0.00'
    carrinho = []
})


  
