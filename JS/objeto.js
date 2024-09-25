//forma de criar objetos

const pessoa = {
    nome: "fulano",
    sobre: "beltrano"
}

console.log(pessoa["sobre"])

//segunda forma criar obj

const func = new Object();
func.nome = "Fulano"
func.sobre = "Beltrano"
console.log(func.nome)
//terceira forma de criar obj

function criarPessoa(nome, sobre,i){
    return{
        nome,
        sobre,
        idade: i,
        get nomeCompleto(){ //criar função com o GET das variaveis nome e sobrenome
            return `${this.nome} ${this.sobre}` //retorna para dentro da função o nome e sobrenome
        }
    
     
    }
    
}
const p1 = criarPessoa("Arthur","Silva")
const p2 = criarPessoa("Arthur","Joaquim")

console.log(p1.nomeCompleto) //se quiser saber somente o nome 
console.log(p2)