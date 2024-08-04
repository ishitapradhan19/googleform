document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    let valid = true;

    formData.forEach((value, key) => {
        if (!value && key !== 'comments' && key !== 'otherStressManagement') {
            valid = false;
        }
    });

    if (valid) {
        fetch('/submit-form', {
            method: 'POST',
            body: new URLSearchParams(new FormData(this)),
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            document.getElementById('surveyForm').reset();
            document.getElementById('confirmationMessage').style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    } else {
        alert('Please fill out all required fields.');
    }
});
