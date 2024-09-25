var s = "JavaScript e Python";

var pos1 = s.indexOf("Python");
var s1 = s.substring(13,19);

console.log(pos1);
console.log(s1);

var frase = "Olá mundo"
console.log(frase.includes("Olá"));
let x = frase.replace("mundo", "pessoal");
console.log(x.toUpperCase())

if(frase.startsWith("Olá")){ //se variavel frase começa com olá
    let x = frase.replace('mundo' , 'pessoal'); //declare na variavel X a troca da das strings
    console.log(x.toUpperCase())//imprime 
}
