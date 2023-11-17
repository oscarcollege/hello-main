// reg-form-script-v1.js

function validateForm() {
    var fname = document.getElementById('fname');
    var sname = document.getElementById('sname');

    if (fname.value.length == 0) {
        alert('please enter your first name');
        error = 1;
    }
    else if (sname.value.length == 0) {
        alert('please enter your surname');
    }
    else {
        error = 0;
    }

    if (error == 1) {
        return false;
    }
    else {
        return true;
    }
}

function init() {
    document.getElementById('loginForm').onsubmit = validateForm;
}

window.onload = init;