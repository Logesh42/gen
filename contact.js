// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Display confirmation message
        document.getElementById('confirmationMessage').classList.remove('hidden');

        // Optionally clear form fields after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
