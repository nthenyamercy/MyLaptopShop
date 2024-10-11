document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Select all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const id = this.getAttribute("data-id"); // Unique product ID
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"));
            const imageSrc = this.previousElementSibling.getAttribute("src");

            // Check if the item is already in the cart
            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image: imageSrc, quantity: 1 });
            }

            // Update cart in localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Remove the product from the index page
            const productElement = document.getElementById(id);
            if (productElement) {
                productElement.remove(); // Removes the element from the DOM
            }

            alert(`${name} has been added to the cart and removed from the list.`);
        });
    });
});
