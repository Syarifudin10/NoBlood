function addToCart() {
    alert('Produk telah ditambahkan ke keranjang!');
}

function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    chatBody.style.display = chatBody.style.display === 'none' || chatBody.style.display === '' ? 'block' : 'none';
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const messages = document.getElementById('messages');
    const message = chatInput.value;

    if (message.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        messages.appendChild(newMessage);
        chatInput.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}

function orderNow(product, price) {
    const productInput = document.getElementById('product');
    const priceInput = document.getElementById('price');
    productInput.value = product;
    priceInput.value = price;
    window.location.href = '#contact';
}

