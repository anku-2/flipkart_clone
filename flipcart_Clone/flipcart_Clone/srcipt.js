// Function to handle the sign-in form submission
function signIn() {
    // Get the email and password values from the form
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform client-side validation (optional)
    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return false; // Prevent form submission
    }

    // Send the form data to the server using fetch or XMLHttpRequest
    fetch('/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (response.ok) {
            // Successful sign-in, redirect to the dashboard or profile page
            window.location.href = '/dashboard';
        } else {
            // Invalid credentials, display an error message
            alert('Invalid credentials. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });

    return false; // Prevent form submission
}

// Event listener for the sign-in button click
document.getElementById('signin-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    signIn(); // Call the signIn function to handle the sign-in process
});
