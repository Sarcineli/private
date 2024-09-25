var n = 3;
//n = n * 10;
n *= 10;
console.log(n);


var x = 10;
x++ //operador incremento
x-- //operador decremento

b = 20;
c = 60;

console.log(x);

console.log(n <= x || b != c);

//verificar se A é maior que B e B é divisível por 2 

var a = 20;
var b = 10;

console.log(a > b && a % 2 == 0);

//verificar se B é maior ou igual a ou b dividido por 2 o resultado é 2 

console.log(b >= a || b / 2 == 2);

//verificar se a é maior que b e b maior/igual a 5 

console.log(a > b && b >= 5);

//verificar se  b é par ou impar usando ternário 

var $result = (b % 2 == 0) ? "par" : "impar";


//atividade proposta+++++++++++++++++++++++++++++
//dados do candidato

var $idade = 26;
var $Exp = 5;
var $certifcado = true;
var $nivelEduca = "superior";

//crítérios eligibilidade

var $c_idade = 20;
var $c_Exp = 2;
var $c_certificado = true;
var $c_nivelEduca = "superior";

console.log($idade >= $c_idade ? "Você possui a idade necessária" : "Você não possui a idade") //mostra idade

if ($Exp >= $c_Exp) { //mostra experiencia

    console.log("Você possui a expêriencia!");
} else {
    console.log("Você não possui");
}

console.log( !$c_certificado || $certifcado) // se tem certificado

console.log($nivelEduca === $c_nivelEduca); // Nivel de educação

// como foi feito no exercicio:

var idade = 28;

var experienciaAnos = 5;

var nivelEducacao = "superior";

var possuiCertificado = true;

// Critérios de elegibilidade

var idadeMinima = 18;

var experienciaMinimaAnos = 3;

var nivelEducacaoMinimo = "superior";

var certificadoObrigatorio = true;

// Verificação de elegibilidade

var elegivel =

    idade >= idadeMinima &&
    experienciaAnos >= experienciaMinimaAnos &&

    (nivelEducacao === nivelEducacaoMinimo || possuiCertificado) &&

    (!certificadoObrigatorio || possuiCertificado);

// Saída do resultado

console.log("Elegível para a vaga? " + elegivel);


