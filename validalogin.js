
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
function validated() {
    if (email.value === '') {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    } else if (password.value === '') {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    if (email.value === 'admin123' && password.value === 'admin@duoc.cl') {
        return true;
    } else {
        alert('debe ingresar los datos correctamente');
        return false;
    }

}
function email_Verify() {
    if (email.value.length >= 7) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify() {
    if (password.value.length >= 7) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

