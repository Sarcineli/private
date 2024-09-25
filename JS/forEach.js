var a = [10, 20, 30, 40, 50, 60];

for (let valor of a) {

    console.log(valor)
}

a.forEach(valor => console.log(valor)); //forma de fazer in-line

var tot = 0;
a.forEach(valor => {
    tot += valor;

})
console.log(tot);

a.forEach(function (valor, indice, array) {
    console.log(array[indice])
})

var carro = [{ modelo: "Audi A3", marca: "Audi", ano: 2020 },
{ modelo: "Compass", marca: "Jeep", ano: 2021 },
{ modelo: "Fit", marca: "Honda", ano: 2023 }
]


for (let caracteristica in carro) { //for usando o IN
    console.log(carro[caracteristica]);

}

for (let c of carro) { //for usando o OF
    console.log(c.ano)
}
var c = 1;
while (c <= 10) { //while
    console.log(c);
    c++
}

var t = 1; 

do { //do while

    console.log(t);
    t++
}while(t < 6){
    console.log("While foi")
}