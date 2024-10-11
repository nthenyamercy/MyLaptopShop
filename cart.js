// When the document is ready, load the cart
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElem = document.getElementById("total-price");

    // Function to load cart items into the cart page
    function loadCartItems() {
        cartItemsContainer.innerHTML = ''; // Clear cart items

        let total = 0;

        cartItems.forEach(item => {
            const cartItemElem = document.createElement("div");
            cartItemElem.classList.add("cart-item");
            cartItemElem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: KSh ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            `;

            cartItemsContainer.appendChild(cartItemElem);

            // Calculate total price
            total += item.price * item.quantity;
        });

        // Update the total price
        totalPriceElem.textContent = `KSh ${total}`;
    }

    loadCartItems();
});
