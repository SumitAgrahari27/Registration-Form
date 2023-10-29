function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let valid = true;

    if (username.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters";
        valid = false;
    } else {
        usernameError.textContent = "";
    }

    if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email address";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    return valid;
}
