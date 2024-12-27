// Example cart data, replace this with actual cart data from localStorage or a global variable
let cart = [
    { productName: "Medicine 1", price: 10.00 },
    { productName: "Medicine 2", price: 15.00 }
];
let totalPrice = 25.00; // Initial total price

// Function to update the cart summary
function updateCartSummary() {
    const cartSummary = document.getElementById("cart-summary");
    cartSummary.innerHTML = ''; // Clear the previous cart list

    // Loop through the cart items and add them to the summary
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartSummary.appendChild(li);
    });

    // Update the total price
    document.getElementById("order-total").textContent = totalPrice.toFixed(2);
}

// Function to handle order submission
document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const paymentMethod = document.getElementById("payment").value;

    // Simple validation (check if fields are filled)
    if (!name || !address || !phone || !paymentMethod) {
        alert("Please fill out all fields.");
        return;
    }

    // Display confirmation message (you can add an actual checkout process here)
    alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nTotal: $${totalPrice.toFixed(2)}`);
    
    // Optionally, clear the cart after order submission
    cart = [];
    totalPrice = 0;
    updateCartSummary();
});


// Initial call to populate cart summary on page load
updateCartSummary();

