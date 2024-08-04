let total = 0;
let cartCount = 0;
const cartItems = [];

function openProduct(image, name, price) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <p>Price: $${price}</p>
            <button onclick="addToCart('${name}', ${price})">Add to Cart</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function addToCart(name, price) {
    cartCount++;
    total += price;
    cartItems.push(name);
    updateCartDisplay();
}

function updateCartDisplay() {
    document.getElementById('cart-count').innerText = cartCount;
    // Optional: Log the cart items to console
    console.log('Cart Items:', cartItems);
}
