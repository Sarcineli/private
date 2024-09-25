var idade = 22;

if (idade < 16) {
    console.log("Não vota")
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional")
}
else {
    console.log("Voto Obrigatório")
}


var diaSem = 4;

switch (diaSem) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")
        break;
    default: 
    console.log("Esse dia da semana não existe!")
}

let x = 7;
let resultado = "";

if (x > 10){
    resultado = "A";
} else if (x <5) {
    resultado = "B";
} else {
    resultado = "C"; 
}
console.log(resultado);