var num = [1, 2, 3, 4, 5, 6, 7, 8, 10];

var total = 0;
for (var i = 0; i > num.length; i++){

    total += num[i];
}
console.log(total);

var tot = num.reduce(function(total,num){
    return total + num
}, 0);

console.log(tot)
