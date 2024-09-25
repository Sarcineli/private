var num = [1, 2, 3, 4, 5, 6, 7, 8, 10];

var result = num.filter(item => item % 2 == 0); //método filter In-Live 
console.log(result);

var numerosFiltrados = num.filter( //Metodos filter criando uma função que retorna o desejado

    function (valor) {
        return valor > 5;

    }
);

console.log(numerosFiltrados);


function buscarValores(valor) { // Ou fazer uma function fora e depois coloca-la no metodo filter


    return valor < 5;
}

var numerosEncontrados = num.filter(buscarValores);
console.log(numerosEncontrados);

var r1 = num.filter((valor) => {

    return valor > 5;
})
console.log(r1)

var numerosEncontrados = num.filter(buscarValores);
console.log(numerosEncontrados);

var r2 = num.filter(valor => valor > 5);

console.log(r2)

var funcionario = [
    { nome: "Luiz", idade: 62 },
    { nome: "Lucas", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Davi", idade: 40 },

]

var pessoasListagem = funcionario.filter(
    function (valor) {
        return valor.nome.length < 5;
    })

console.log(pessoasListagem);


var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Fogão", categoria: "Eletrodoméstico"},
    
]

var listProdutos = produtos.filter(produtos => produtos.categoria == "Eletrônico")
console.log(listProdutos);

//Função MAP 

