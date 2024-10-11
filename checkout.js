document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const orderItemsContainer = document.getElementById("order-items");
    const totalPriceElem = document.getElementById("total-price");

    // Function to load cart items into the order summary
    function loadOrderItems() {
        orderItemsContainer.innerHTML = ''; // Clear previous order items

        let total = 0;

        cartItems.forEach(item => {
            const orderItemElem = document.createElement("div");
            orderItemElem.classList.add("order-item");
            orderItemElem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: KSh ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            `;

            orderItemsContainer.appendChild(orderItemElem);

            // Calculate total price
            total += item.price * item.quantity;
        });

        // Update the total price
        totalPriceElem.textContent = `KSh ${total}`;
    }

    loadOrderItems();

    // Handle form submission
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Order has been placed successfully!");

        // Clear the cart after placing the order
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const orderItemsContainer = document.getElementById("order-items");
    const totalPriceElem = document.getElementById("total-price");

    // Function to load cart items into the order summary
    function loadOrderItems() {
        orderItemsContainer.innerHTML = ''; // Clear previous order items

        let total = 0;

        cartItems.forEach(item => {
            const orderItemElem = document.createElement("div");
            orderItemElem.classList.add("order-item");
            orderItemElem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width:100px; height:auto;">
                <h3>${item.name}</h3>
                <p>Price: KSh ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            `;

            orderItemsContainer.appendChild(orderItemElem);

            // Calculate total price
            total += item.price * item.quantity;
        });

        // Update the total price
        totalPriceElem.textContent = `KSh ${total}`;
    }

    loadOrderItems();
});

