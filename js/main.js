// Handle Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle login logic here (e.g., local storage or redirect to dashboard)
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    if (username && role) {
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        window.location.href = `${role}_dashboard.html`;
    } else {
        alert("Please fill in all fields");
    }
});

// Handle Sign-Up Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle sign-up logic here (e.g., local storage or redirect)
    const username = document.getElementById('signup-username').value;
    const role = document.getElementById('signup-role').value;
    if (username && role) {
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        window.location.href = `${role}_dashboard.html`;
    } else {
        alert("Please fill in all fields");
    }
});
