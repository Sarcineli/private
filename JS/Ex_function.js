function multiplicar(x, y) { //função regular
    return x * y
}

var a = multiplicar(4, 2);
console.log(a)

var b = multiplicar(6, 7);
console.log(b);

function somaValores(a, b = 2, c = 6 ) {
    var total = a + b + c;
    return total;
}
var f = somaValores(8,4,5);
console.log(f);

var infoCal = function(a,b,c){ // função anônima
    return a+b+c;
} 
console.log(infoCal(2,5,7))

const soma = (num1,num2) =>{
    return num1+num2
} 
console.log(soma(5,2));

const numbers = [1,2,3,4,5];
const valores = numbers.map((num) => num*num); //uso da arrow function no .map
console.log(valores)

var listaProdutos = ["geladeira" , "fogão" , "arCondicionado"]
var listaupperCase = listaProdutos.map(primeiraUpper);

function primeiraUpper(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);


} console.log(listaupperCase)