var num = [1, 2, 3, 4, 5, 6, 7, 8, 10];

var numA = num.map(function (valor) {

    return valor * 2;
})
console.log(numA);


var funcionario = [
    { nome: "Luiz", idade: 62 },
    { nome: "Lucas", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Davi", idade: 40 },

] 
nomes = funcionario.map(pessoa => pessoa.nome); 
console.log(nomes);