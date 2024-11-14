
// Handle Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get username and role values from the form
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;

    // Check if both fields are filled
    if (username && role) {
        // Store username and role in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        // Redirect user to their specific dashboard
        if (role === 'admin') {
            // Admin role redirects to the admin dashboard
            window.location.href = 'admin_dashboard.html';
        } else if (role === 'farmer') {
            // User role redirects to the regular user dashboard
            window.location.href = 'farmer_dashboard.html';
        } else if (role === 'agrovet') {
            // User role redirects to the regular user dashboard
            window.location.href = 'agrovet_dashboard.html';
        } else {
            // In case of an invalid role, show an error message
            alert("Invalid role. Please select a valid role.");
        }
    } else {
        alert("Please fill in all fields");
    }
});

// Handle Sign-Up Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get username and role values from the sign-up form
    const username = document.getElementById('signup-username').value;
    const role = document.getElementById('signup-role').value;

    // Check if both fields are filled
    if (username && role) {
        // Store username and role in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        // Redirect user to their specific dashboard after successful sign-up
        if (role === 'admin') {
            // Admin role redirects to the admin dashboard
            window.location.href = 'admin_dashboard.html';
        } else if (role === 'user') {
            // User role redirects to the regular user dashboard
            window.location.href = 'user_dashboard.html';
        } else {
            // Handle case for invalid role
            alert("Invalid role. Please select a valid role.");
        }
    } else {
        alert("Please fill in all fields");
    }
});

// Admin login specific validation (optional)
function isAdminLoggedIn() {
    const role = localStorage.getItem('role');
    return role === 'admin';
}

// Example check for admin access in admin pages
window.onload = function () {
    if (isAdminLoggedIn()) {
        // Show admin-specific content
        console.log('Welcome, Admin!');
    } else {
        // Redirect if not an admin (or you can show an access denied message)
        if (window.location.pathname.includes('admin_dashboard.html')) {
            alert('You must be an admin to access this page');
            window.location.href = 'login.html'; // Redirect to login page
        }
    }
};
   // Get the modal and button elements
   const modal = document.getElementById('updateHarvestModal');
   const updateBtn = document.getElementById('updateHarvestBtn');
   const closeModal = document.getElementById('closeModal');
   const updateForm = document.getElementById('updateHarvestForm');

   // Open the modal when the "Update Harvest" button is clicked
   updateBtn.onclick = function() {
       modal.style.display = "block";
   }

   // Close the modal when the user clicks on <span> (x)
   closeModal.onclick = function() {
       modal.style.display = "none";
   }

   // Close the modal if the user clicks anywhere outside the modal
   window.onclick = function(event) {
       if (event.target === modal) {
           modal.style.display = "none";
       }
   }

   // Handle form submission (for now, just log the data)
   updateForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent form submission

       const plantType = document.getElementById('plant-type').value;
       const quantityHarvested = document.getElementById('quantity-harvested').value;
       const quantityExpected = document.getElementById('quantity-expected').value;

       // You can handle form data here (send it to the server, or save in localStorage)
       console.log('Plant Type:', plantType);
       console.log('Quantity Harvested:', quantityHarvested);
       console.log('Quantity Expected:', quantityExpected);

       // Close the modal after form submission
       modal.style.display = "none";
   });

