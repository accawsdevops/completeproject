fetch('http://backend-service/products')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('products');
        products.forEach(product => {
            const item = document.createElement('div');
            item.textContent = `${product.name} - $${product.price}`;
            container.appendChild(item);
        });
    });
