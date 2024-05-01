document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = loginForm.email.value.trim(); // Trim whitespace
            const password = loginForm.password.value.trim(); // Trim whitespace

            // Simulate authentication (replace with actual authentication logic)
            // Check if email and password match
            if (email === "user@example.com" && password === "password") {
                // Simulate storing user session (replace with actual session management)
                localStorage.setItem("isLoggedIn", true);
                window.location.href = "index.html"; // Redirect to index page
            } else {
                alert("Invalid email or password");
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = signupForm.email.value;
            const password = signupForm.password.value;

            // Simulate user registration (replace with actual registration logic)
            alert("User registered successfully");
            signupForm.reset();
        });
    }
});
