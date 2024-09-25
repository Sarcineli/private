var valores = [8, 1, 7, 2, 9];

console.log(valores[0]);

// FOR para visualizar posição e valor da array

for (var pos = 0; pos < valores.length; pos++) {

    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "volvo";
carros[1] = "Jeep";
carros[2] = "Ford";

var motos = new Array("BMW", "YAMAHA", "HONDA");

console.log(motos)

// calcular a média de todos os números de uma array
var soma = 0;
for (var pos = 0; pos < valores.length; pos++) {

    soma += valores[pos];
}

var media = soma / valores.length;

console.log(media)

//EXERCICIO: localizar o maior valor dentro de uma array

var maiorValor = valores[0];

// Percorrendo o array para encontrar o maior valor
for (var i = 1; i < valores.length; i++); {

    if (valores[i] > maiorValor) {

        maiorValor = valores[i]; // Atualiza o maior valor se encontrar um número maior

    }
}

console.log("O maior valor é: ", maiorValor);

//EXERCICIO: retornar a cidade que tem o maior tamanho de palavras

var cidades = ["Rio de Janeiro", "Sergipe", "Maranhão", "São Paulo", "Minas Gerais"]; // cria a array

var maiorCidade = [0]; //cria a variavel de maior cidade começando na posição 0

for (var i = 0; i < cidades.length; i++){ //estrutura FOR

    if(cidades[i].length > maiorCidade.length) {

        maiorCidade = cidades[i];
    }
}
console.log(maiorCidade);
