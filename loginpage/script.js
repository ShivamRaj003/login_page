
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
})

    document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission


    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple hardcoded credentials for demonstration
    const correctUsername = "user";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {

        errorMessage.textContent = ""; // Clear any previous error message
        // Redirect to another page or perform further actions
        window.location.href = "new.html"; 
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
