var array = [1, 2, 3, 4, 5, 6, 7];

array.splice(2, 3); //sd 


console.log(array);

var nomes = ["Maria", "João", "Lucas", "Pedro"];
var novos = nomes.splice(1, 2, "Luiz", "Laércio");

console.log(novos);
console.log(nomes);

var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai"); //Substitui o primeiro elemento da Array
console.log(pais);

var ar = ["guilherme", "samuel", "manuel", "David", "João"];

ar.push("Mônica"); // função push adiciona um elemento no fim do Array
console.log(ar);

ar.pop(); // pop remove o último elemento do array
console.log(ar);

var posicao = ar.indexOf("samuel"); //indexOf encontra a posição do elemento no Array
console.log(posicao);

var troca_nome = ar.splice(2, 1, "Emanuel");

console.log(ar);


var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["David", "Manuela"]
var pessoa1 = pessoa.slice(1, 3); //slice ele não modifica a array original

console.log(pessoa);
console.log(pessoa1);

var empresa = pessoa.concat(gerente);

console.log(empresa);

var mesesAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

var $1Trimestre = mesesAno.slice(0, 3);
var $2Trimestre = mesesAno.slice(3, 6);
var $3Trimestre = mesesAno.slice(6, 9)
var $4Trimestre = mesesAno.slice(9, 12);
console.log("Primeiro trimestre: " + $1Trimestre);
console.log("Segundo trimestre: " + $2Trimestre);
console.log("Terceiro trimestre: " + $3Trimestre);
console.log("Quaro trimestre: " + $4Trimestre);




