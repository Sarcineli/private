class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("Ligado!")
            return;
        }
        this.ligado = true;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }
}
var p1 = new Smartphone("Samsung" , "Preto" , "A50")
console.log(p1);