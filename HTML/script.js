
let valorTotal = [0, 0];
let valorProduto = [49, 50];
let qtd = [0, 0];

function adicionarItem(item) {

   let quantidade = document.getElementById('quantidade' + item);
   let total = document.getElementById("total" + item);
   qtd[item] += 1;
   valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
   quantidade.innerHTML = qtd[item];
   total.innerHTML = valorTotal[item].toFixed(2);

}
