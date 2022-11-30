document.getElementById('login-button').addEventListener('click', function () {
    const idfield = document.getElementById('id');
    const id = idfield.value;
    const passwordfield = document.getElementById('password');
    const password = passwordfield.value;
    if (id == '22-46230-1' && password == '2285') {
        window.location.href = 'ForgotPassword.html';
    }

    else {
        alert('chor mainsher personal jaigai hat des')
    }

})