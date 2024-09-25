function criarFuncionario(nome, sobre, a, p) {
    return {
        nome,
        sobre,
        altura: a,
        peso: p,
        calcIMC() {
            const indice = this.peso / (this.altura ** 2);
            const indiceArredondado = indice.toFixed(1); // Arredonda o IMC
            if (indiceArredondado < 18.5) {
                console.log("Abaixo do peso!");
            } else if (indiceArredondado >= 18.5 && indiceArredondado < 24.9) {
                console.log("Peso ideal!");
            } else if (indiceArredondado >= 25 && indiceArredondado < 29.9) {
                console.log("Você está acima do peso!");
            } else if (indiceArredondado >= 30 && indiceArredondado < 34.9) {
                console.log("Obesidade 1");
            } else if (indiceArredondado >= 35 && indiceArredondado < 39.9) {
                console.log("Obesidade 2");
            } else if (indiceArredondado >= 40) {
                console.log("Obesidade 3");
            }
        }
    };
}

const p1 = criarFuncionario("Matheus", "Santos", 1.98, 109);

p1.calcIMC();

var a = 2;
var b = 5;
function compare(a,b){

    if (a>b){
        return -1;
    }else if (a<b){
        return 1;
    }
    return 0;
}
