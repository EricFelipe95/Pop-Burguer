const hamburgueres = [
    { nome: "Hambúrguer de Siri",preco: 29.90, classe: "hambúrguer", 
    descricao: "Delicioso hambúrguer marinho, servido com carne fresca, picles, cebola extra, alface, tomate e o MOLHO SECRETO, guardado a sete chaves.",
    src: "./img/hamburguer-de-siri.png", title: "SpongeBob SquarePants"},

    { nome: "Big Kahuna Burger", preco: 19.90, classe: "hambúrguer", 
    descricao: "Um clássico Havaiano com alma tropical. Um hambúrguer suculento, cheio de sabor e atitude cinematográfica.",
    src: "./img/big-kahuna-burger.png", title: "Pulp Fiction"},

    { nome: "Good Burger", preco: 22.00, classe: "hambúrguer", 
    descricao: "Diretamente dos anos 90, o Good Burger é o lanche que conquistou gerações com seu sabor simples, autêntico e o lendário Molho Secreto do Ed.",
    src: "./img/good-burger.png", title: "Good Burger"},

    { nome: "Krusty Burger", preco: 16.00, classe: "hambúrguer", 
    descricao: "O hambúrguer mais querido (e duvidoso) de Springfield! Um hambúrguer feito para quem não tem medo de calorias, ou de segredos da cozinha do Krusty.",
    src: "./img/krusty-burger.png", title: "The Simpsons"},

    { nome: "Cebolas em Consequências", preco: 25.50, classe: "hambúrguer", 
    descricao: "Um clássico da lanchonete do Bob Belcher, feito com cebolas caramelizadas, tomilho fresco e queijo de cabra.Uma explosão de sabores.",
    src: "./img/cebolas-em-consequencias.png", title: "Bob's Burgers"},

    { nome: "Hambúrguer com pimenta atômica", preco: 20.00, classe: "hambúrguer", 
    descricao: "Aviso: este não é para os fracos! O Hambúrguer com Pimenta Atômica ficou famoso depois de fazer até os mais valentes caírem.",
    src: "./img/hamburguer-com-pimenta-atomica.png", title: "Dumb & Dumber"},
]
    
const lanches = [
    { nome: "Sanduíche mortal", preco: 23.90, classe: "lanche", 
    descricao: "Uma lenda em forma de sanduíche. Um lanche tão poderoso que vem com aviso de risco de vida.",
    src: "./img/sanduiche-mortal.png", title: "Regular Show"},

    { nome: "Chili Dog", preco: 17.50, classe: "lanche", 
    descricao: "O lanche favorito do ouriço azul. O Chili Dog é rápido, suculento e cheio de personalidade, feito para quem corre atrás de aventuras e sabor.",
    src: "./img/chili-dog.png", title: "Sonic the Hedgehog"},

    { nome: "Sanduíche do Tempo", preco: 30.00, classe: "lanche", 
    descricao: "Um sanduíche que transcende a realidade, misturando magia e ingredientes minuciosamente selecionados por Jake, o cão. Acompanha um ingrediente secreto de lagosta.",
    src: "./img/sanduiche-do-tempo.png", title: "Adventure Time"},

    { nome: "Ribwich", preco: 28.00, classe: "lanche", 
    descricao: "Um sanduíche limitado, muita gordura e dúvidas do que exatamente você está comendo. Responsável por uma histeria coletiva em Springfield.",
    src: "./img/ribwich.png", title: "The Simpsons"},

    { nome: "Lembas Élficas", preco: 10.00, classe: "lanche", 
    descricao: "Diretamente da Terra Média. O pão sagrado dos elfos são pequenas porções de poder e pureza. Um único pedaço pode sustentar um viajante por dias.",
    src: "./img/lembas-elficas.png", title: "The Lord of the Rings"},

    { nome: "O Umidificador (The Moist Maker)", preco: 19.90, classe: "lanche", 
    descricao: "Uma obra-prima de Ross Geller. Criado com sobras do Dia de Ação de Graças, o segredo do sabor é a fatia extra embebida em molho.",
    src: "./img/the-moist-maker.png", title: "Friends"},
]

const bebidas = [
    { nome: "Cerveja Duff", preco: 6.50, classe: "bebida", 
    descricao: "A cerveja mais famosa de Springfield. Conhecida por seu sabor leve e refrescante, é a escolha perfeita para relaxar após um longo dia.",
    src: "./img/duff-beer.png", title: "The Simpsons"},

    { nome: "Slurm", preco: 7.00, classe: "bebida", 
    descricao: "Embora sua origem seja um tanto questionável, seu sabor doce e efervescente conquista fãs por todo o universo.",
    src: "./img/slurm.png", title: "Futurama"},

    { nome: "Cerveja Amanteigada", preco: 9.00, classe: "bebida", 
    descricao: "Uma bebida mágica, conhecida por seu sabor rico e cremoso. Popular entre bruxos e trouxas.",
    src: "./img/cerveja-amanteigada.png", title: "Harry Potter"},

    { nome: "Cerveja Romulana", preco: 10.00, classe: "bebida", 
    descricao: "Conhecida por seu sabor forte e efeito revigorante, agrada os mais distintos paladares do universo.",
    src: "./img/cerveja-romulana.png", title: "Star Trek"},

    { nome: "Nuka Cola", preco: 8.50, classe: "bebida", 
    descricao: "A bebida ideal para um mundo pós-apocalíptico. Com seu sabor único e refrescante, é a escolha ideal para aventureiros.",
    src: "./img/nuka-cola.png", title: "Fallout"},

    { nome: "Sprunk", preco: 6.00, classe: "bebida", 
    descricao: "Diretamente de Liberty City. Com seu sabor cítrico de limão, é perfeita para quem busca adrenalina.",
    src: "./img/sprunk.png", title: "Grand Theft Auto"},
]

const sobremesas = [
    { nome: "Biscoitos Scooby", preco: 2.00, classe: "sobremesa", 
    descricao: "Um lanche crocante e delicioso, perfeito para acompanhar suas aventuras, e te dar coragem.",
    src: "./img/biscoitos-scooby.png", title: "Scooby-Doo"},

    { nome: "Rosquinhas", preco: 5.00, classe: "sobremesa", 
    descricao: "Famosas rosquinhas de Springfield, macias, doces e cobertas com glacê colorido e granulados. Uma verdadeira tentação.",
    src: "./img/rosquinhas.png", title: "The Simpsons"},

    { nome: "Barra Wonka", preco: 4.00, classe: "sobremesa", 
    descricao: "Uma barra que vem direto da Fantástica Fábrica de Chocolate. Cremosa e com aquele toque misterioso que só Willy Wonka poderia criar.",
    src: "./img/wonka-bar.png", title: "Willy Wonka & the Chocolate Factory"},
    
     { nome: "Biscoitos", preco: 1.50, classe: "sobremesa", 
    descricao: "Um biscoito de gengibre crocante com origens no reino de Tão, Tão Distante. Ele é pequeno, saboroso e cheio de personalidade.",
    src: "./img/biscoito-gengibre.png", title: "Shrek"},

]

const cardapioArrays = [...hamburgueres, ...lanches,]