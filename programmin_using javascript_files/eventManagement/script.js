function toggleForms() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');

    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'flex';
        registerContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'flex';
    }
}