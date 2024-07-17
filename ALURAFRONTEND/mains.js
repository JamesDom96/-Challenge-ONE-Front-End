document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productContainer = document.getElementById('productContainer');
    const clearFormButton = document.getElementById('clearForm');

    const products = [
        { name: 'Stormtrooper', price: 60, image: 'stormtrooper.jpg' },
        { name: 'Game Boy Classic', price: 60, image: 'gameboy.jpg' },
        { name: 'Stormtrooper', price: 60, image: 'stormtrooper.jpg' },
        { name: 'Game Boy Classic', price: 60, image: 'gameboy.jpg' },
        { name: 'Stormtrooper', price: 60, image: 'stormtrooper.jpg' },
        { name: 'Game Boy Classic', price: 60, image: 'gameboy.jpg' }
    ];

    function displayProducts() {
        productContainer.innerHTML = '';
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$ ${product.price.toFixed(2)}</p>
                <button onclick="deleteProduct(${index})">🗑️</button>
            `;
            productContainer.appendChild(productCard);
        });
    }

    window.deleteProduct = function(index) {
        products.splice(index, 1);
        displayProducts();
    };

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('productName').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const image = document.getElementById('productImage').value;
        products.push({ name, price, image });
        displayProducts();
        productForm.reset();
    });

    clearFormButton.addEventListener('click', () => {
        productForm.reset();
    });

    displayProducts();
});
