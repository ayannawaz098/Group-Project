form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop default page refresh

    // Retrieve inputs from the form DOM
    const inputs = form.querySelectorAll('input');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const phone = inputs[2].value.trim();

    // Select dropdown element
    const sourceSelect = document.getElementById('0');
    const selectedSource = sourceSelect.value;

    // A. Basic Validation using Conditional Statements (Lecture 7)[cite: 1]
    if (!name || !email || !phone) {
        alert('Please complete all required fields (Name, Email, and Contact Number).');
        return;
    }
});