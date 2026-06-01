let currentCategory = 'all';
let currentBrand = 'all';

function getFilteredProducts() {
    return products.filter(product => {
        const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
        const brandMatch = currentBrand === 'all' || product.brand === currentBrand;
        return categoryMatch && brandMatch;
    });
}

function renderCatalog() {
    const filtered = getFilteredProducts();
    const catalog = document.getElementById('catalog');
    
    if (filtered.length === 0) {
        catalog.innerHTML = '<div class="no-products">😕 Нет товаров в выбранной категории</div>';
        return;
    }
    
    const brandNames = {
        'nasty': 'Nasty Juice',
        'vaporesso': 'Vaporesso',
        'geekvape': 'GeekVape',
        'husky': 'Husky',
        'five': 'Five Salts',
        'jord': 'Jord Street',
        'djado': 'Djado'
    };
    
    const categoryNames = {
        'liquid': 'Жидкость',
        'pod': 'Под',
        'coils': 'Испаритель',
        'consumables': 'Расходник',
        'cigarettes': 'Сигареты',
        'snus': 'Снюс'
    };
    
    catalog.innerHTML = filtered.map((product, index) => {
        const imageId = index + 1;
        const imagePath = `images/product${imageId}.jpg`;
        
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${imagePath}" alt="${product.name}" onerror="this.style.display='none';this.parentElement.innerHTML='📷 <span style=\'font-size:2em;color:#7c3aed\'>Вставь фото: product${imageId}.jpg</span>'">
                </div>
                <span class="category-badge">${categoryNames[product.category]}</span>
                <p class="brand">${brandNames[product.brand]}</p>
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price">${product.price} BYN</p>
                <button class="add-btn" onclick="addToCart(${product.id})">💜 Добавить в корзину</button>
            </div>
        `;
    }).join('');
}

function filterProducts() {
    const categoryRadio = document.querySelector('input[name="category"]:checked');
    const brandRadio = document.querySelector('input[name="brand"]:checked');
    
    currentCategory = categoryRadio ? categoryRadio.value : 'all';
    currentBrand = brandRadio ? brandRadio.value : 'all';
    
    renderCatalog();
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function checkoutToTelegram() {
    if (cart.length === 0) {
        alert('📦 Корзина пуста! Добавьте товары.');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let message = '🛒 ЗАКАЗ VAPE SHOP%0A%0A';
    cart.forEach(item => {
        message += `📦 ${item.name} × ${item.quantity} = ${item.price * item.quantity} BYN%0A`;
    });
    message += `%0A💰 ИТОГО: ${total} BYN`;
    
    const telegramUrl = `https://t.me/TrahanZizhka?text=${message}`;
    
    window.open(telegramUrl, '_blank');
    
    cart = [];
    updateCart();
    toggleCart();
}

document.getElementById('cart-modal').addEventListener('click', function(e) {
    if (e.target === this) toggleCart();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        toggleCart();
        if (document.getElementById('sidebar').classList.contains('active')) {
            toggleMenu();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    updateCart();
});