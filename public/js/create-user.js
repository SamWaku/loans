let formWrapper = document.getElementById('registerUser');

formWrapper.addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let roles = document.getElementById('roles').value;
    let password = document.getElementById('password').value;

    const data = {
        username,
        email,
        phone,
        roles,
        password
    }

    fetch('http://localhost:5000/api/v2/user/register', {
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

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('roles').value = '';
    document.getElementById('password').value = '';
})