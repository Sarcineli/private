var nome = "Matheus Santos";
var x = nome.length;
console.log(x)

result = x > 20 ? "Acertou mizeravi" : "Bota mais letra ai" // ternário

console.log(result);

var res = nome.toUpperCase();//DEIXA EM MAIUSCULO
console.log(res);

var game = "Barcelona vs Real"
g = game.indexOf("Real");//pega a posição da string selecionada
console.log(g);


var cortado = game.slice(0,); // corta a partir da posição para frente 


console.log(cortado);

var val = game.includes("Real")//procura valor na string
console.log(val);
var str1 = "hello";
var str2 = " world";

str3 = str1.concat(str2);
console.log(str3);

var frase = "            Olá, você está aprendendo JS";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");

console.log(arr[3]);

