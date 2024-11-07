document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const messageElement = document.getElementById('message');

    
    if (!name || !email || !amount) {
        messageElement.textContent = 'Semua kolom wajib diisi!';
        messageElement.style.color = 'red';
    } else if (!validateEmail(email)) {
        messageElement.textContent = 'Format email tidak valid!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Terima kasih atas donasi Anda!';
        messageElement.style.color = 'green';
    }
});


function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
