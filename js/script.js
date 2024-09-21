// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Example: Update cart count dynamically
    const cartIcon = document.querySelector('.cart-count');
    let cartCount = 0;

    // Simulate adding items to the cart
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartIcon.textContent = cartCount;
        });
    });
});