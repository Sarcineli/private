class Pessoa {

    constructor(nome, sobrenome) {//toda vez que eu quiser criar um objeto na classe eu crio um constructor
        this.nome = nome
        this.sobrenome = sobrenome

    }
    falar() {
        console.log("Olá " + this.nome)
    }

    get nomeCompleto(){
        console.log("Olá " + this.nome + " " + this.sobrenome);
    }

}

p1 = new Pessoa("Matheus", "Santos");
p1.falar();
p1.nomeCompleto