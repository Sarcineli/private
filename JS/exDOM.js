let totalNotas = 0;

let qtdEstudante = 0;

let nota;

console.log("Digite a nota dos alunos: (Digite um valor negativo quando quiser encerrar o registro");

while (true) {

    nota = parseFloat(prompt("digite a nota do estudante: "));

    if (nota < 0) {

        break;
    }

    totalNotas += nota;
    qtdEstudante++;


}
if (qtdEstudante > 0) {
    const media = totalNotas / qtdEstudante;

    console.log("A média das notas é: ", media.toFixed(2)); //to fixed serial qnts casas decimais após a vírgula
} else {

    console.log("Nenhuma nota foi digitada.")
}




