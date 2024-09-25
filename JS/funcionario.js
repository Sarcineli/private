class Pessoas {
    // O construtor define os atributos nome, idade e cargo da classe Pessoa
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    // Método seApresentar imprime uma mensagem com os atributos nome, idade e cargo
    seApresentar() {
        console.log(`Meu nome é ${this.nome}! Tenho ${this.idade} anos de idade e sou ${this.cargo}.`);
    }

    // Método trabalhar imprime uma mensagem dizendo que a pessoa está trabalhando
    trabalhar() {
        console.log(this.nome + " está atualmente trabalhando!");
    }
}

class Gerente extends Pessoas {
    // O construtor da classe Gerente chama o construtor da classe Pai (Pessoas) e adiciona o atributo departamento
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo); // Chama o construtor da classe Pessoas
        this.departamento = departamento; // Define o novo atributo específico de Gerente
    }

    // Método gerenciar imprime uma mensagem dizendo que o gerente está gerenciando um departamento
    gerenciar() {
        console.log(this.nome + " está gerenciando o departamento de: " + this.departamento);
    }
}

class Desenvolvedor extends Pessoas {
    // O construtor da classe Desenvolvedor chama o construtor da classe Pai (Pessoas) e adiciona o atributo linguagem
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo); // Chama o construtor da classe Pessoas
        this.linguagem = linguagem; // Define o novo atributo específico de Desenvolvedor
    }

    // Método programar imprime uma mensagem dizendo que o desenvolvedor está programando em uma linguagem
    programar() {
        console.log(this.nome + " está desenvolvendo algo em: " + this.linguagem);
    }
}

// Criando uma instância da classe Gerente
const pessoa1 = new Gerente("Carlos", 45, "Gerente", "T.I");

// Correção: para chamar os métodos, adicione ()
pessoa1.seApresentar();  // Carlos se apresenta
pessoa1.trabalhar();     // Carlos está trabalhando
pessoa1.gerenciar();     // Carlos está gerenciando o departamento de T.I

// Criando uma instância da classe Desenvolvedor
const pessoa2 = new Desenvolvedor("Matheus", 26, "Desenvolvedor", "JavaScript");

// Correção: para chamar os métodos, adicione ()
pessoa2.seApresentar();  // Matheus se apresenta
pessoa2.trabalhar();     // Matheus está trabalhando
pessoa2.programar();     // Matheus está programando em JavaScript