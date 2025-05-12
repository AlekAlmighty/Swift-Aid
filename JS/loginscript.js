document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const rememberMeCheckbox = document.getElementById('remember-me');

    // Load saved username if "Remember Me" was checked
    const savedUsername = localStorage.getItem('rememberedUsername');
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = document.getElementById('password').value;

        // Simulate login validation (replace with actual validation logic)
        if (username === 'itseyroncaras@gmail.com' && password === 'admin123') {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('rememberedUsername', username);
            } else {
                localStorage.removeItem('rememberedUsername');
            }
            alert('Login successful!');
            // Redirect to admin page
            window.location.href = 'admin.html';
        } else {
            document.getElementById('error-message').textContent = 'Invalid username or password.';
        }
    });
});
