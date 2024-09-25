var bebida = "Suco";
var valor = "";
switch (bebida) {
    case "Leite":
        valor = "R$" + 3.00;
        console.log(bebida + "  valor é: " + valor);
        break;
    case "Café":
        valor = "R$" + 2.00;
        console.log(bebida + "  valor é: " + valor);
        break;
    case "Suco":
        valor = "R$" + 4.00;
        console.log(bebida + "  valor é: " + valor);
        break;
    default:
        console.log("escolha deve ser feita entre café, leite ou chá.");


}