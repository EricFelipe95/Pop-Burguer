 # Seja bem-vindo ao Pop Burger !! #

Este é um projeto de uma hamburgueria geek online fictícia, criada como exercício de ferramentas JavaScript do curso **DevClub**.
O principal objetivo desse projeto é treinar, aprender e trabalhar com ferramentas específicas como:

- `ForEach`
- `Map`
- `Reduce`
- `Filter`
  
---

## Criatividade

- Como base de tema do próprio curso, utilizei a ideia de fazer uma hamburgueria online, mas essa é diferente. Tendo um cardápio com mais de 20 itens, a **Pop Burger** 
reúne os lanches mais conhecidos da cultura pop. Tendo suas referências em filmes, séries, animações e até games.
- Para ser o mais fiél possível. **As fotos dos lanches foram geradas pela IA GEMINI, com base em imagens e menções de suas respectivas mídias.**
- Com o fundo escuro, optei por deixar centralizado uma imagem de uma tábua de churrasco para dar um tom rústico ao design ao aparecer o cardápio.
- Para o botão de desconto, optei por ser uma imagem do famoso **Ticket Dourado**, para dar um tom especial à função.

<img width="1350" height="606" alt="Captura PopBurguer1" src="https://github.com/user-attachments/assets/44de0fc9-3477-41a4-b5d4-a65f6ec26c81" />

---

## Funcionalidade

- Ao entrar no site, será recebido por um modal, onde pude exercitar ferramentas como `.hidden`, `.show` e `setTimeOut` para manipular o conteúdo a aparecer.
- Ao clicar em "Ver Cardápio", o **forEach** irá renderizar uma variável só de itens "Hambúrguer" para escolha.
- O usuário tem a escolha de mais 3 categorias(lanches, bebidas e sobremesas) pelos botões no lado esquerdo, e utilizando a funcionalidade `.onclick`, irão renderizar suas respectivas classes.
- Há também, um botão ao lado esquerdo que irá aparecer somente itens específicos (valor menor ou igual a 20), que é possível com uma combinação de **filter** com `Spread Operator`, juntando duas variáveis.
- Foi criado uma função para guardar em uma variável os dados de valor dos itens clicados, e pelo **reduce**, será feita a soma dos valores e impressa na tela com `.textContent`.
- Outro botão , ao lado direito, irá fazer uma operação através do **map** na variável "carrinho", para descontar 10% do valor já guardado.
- Por fim, o botão "Finalizar compra" irá mostrar uma mensagem por meio do `alert()` e zerar o carrinho para seu valor original.

<img width="1349" height="606" alt="image" src="https://github.com/user-attachments/assets/23570392-5179-4207-b040-d0078e3ca353" />

---

E aí? Conseguiu pegar todas as referências?

Espero que gostem.
