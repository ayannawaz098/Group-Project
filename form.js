form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const inputs = form.querySelectorAll('input');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const phone = inputs[2].value.trim();

    const sourceSelect = document.getElementById('0');
    const selectedSource = sourceSelect.value;

\    if (!name || !email || !phone) {
        alert('Please complete all required fields (Name, Email, and Contact Number).');
        return;
    }
});