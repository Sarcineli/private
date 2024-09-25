const shopCart = [];

addItemtoCart("Tennis");
addItemtoCart("Blusa");
addItemtoCart("Short");

console.log(shopCart);

function addItemtoCart(item) {
    shopCart.push(item)
}

function removeItemfromCart(item) {
    const index = shopCart.indexOf(item)
    if (index !== -1) {
        shopCart.splice(index, 1)
    }
}

function viewCart() {
    if (shopCart.lenght === 0) {
        console.log("Your shopping cart is empty")
    } else {
        console.log("Itens in your shopping cart: ")
        for (let i = 0; i < shopCart.length; i++) {
            console.log(`${i + 1} - ${shopCart[i]}`)

        }
    }
}

function clearCart() {
    shopCart.length = 0;
    console.log("Your shopping cart has been cleared")
}


viewCart()// Chama a função para visualizar o carrinho
removeItemfromCart("Blusa")
viewCart()

clearCart()

viewCart()
