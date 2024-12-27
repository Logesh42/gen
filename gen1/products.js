let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;

    // Update Cart Display
    updateCart();
}

function updateCart() {
    // Update cart items list
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ''; // Clear the cart list

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    // Update total price
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}
