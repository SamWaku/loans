let formWrapper = document.getElementById('registerUser');

formWrapper.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const data = {
        email,
        password
    }

    fetch('http://localhost:5000/api/v2/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === true) {
                alert('Success!!! ' + data.message)
            } else {
                alert('Error!!! ' + data.message)
            }
        })
        .catch((error) => {
            alert('Error!!! ' + error);
        });

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
})