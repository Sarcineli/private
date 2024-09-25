class Objeto {
    constructor(nome, descricao, categoria, preco) {
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.preco = preco;
    }
}

const objList = [
    new Objeto("Sansung A71", "Celular para games", "Eletrônico", 1500),
    new Objeto("Sansung TAB G21", "Tablet para estudo", "Eletrônico", 2100),
    new Objeto("Fogão 4 Tramontina", "Fogão de cozinha", "Eletrodoméstico", 1600),
    new Objeto("Frezeer Brastemp", "Geladeira/Freezer bom", "Eletrodoméstico", 4000),
    new Objeto("Air Fryer", "Agiliza seu dia", "Eletrodoméstico", 950)
];

function filtroCategoria() {
    const categoriaInput = document.getElementById("categoriaInput").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    // Corrigido o nome da lista
    const objFiltrados = objList.filter(Objeto => Objeto.categoria === categoriaInput);

    // Corrigida a verificação de lista vazia
    if (objFiltrados.length === 0) {
        resultado.innerHTML = "Nenhum objeto encontrado para a categoria informada.";
        return;
    }

    // Mover o forEach para dentro da função
    objFiltrados.forEach(Objeto => {
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>Nome:</strong> ${Objeto.nome}<br>
        <strong>Descrição:</strong> ${Objeto.descricao}<br>
        <strong>Categoria:</strong> ${Objeto.categoria}<br>
        <strong>Preço:</strong> ${Objeto.preco}<br>
        `;
        resultado.appendChild(li);
    });
}
