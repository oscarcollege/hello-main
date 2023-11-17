// alert-02-script.js

function alertUser() {
    alert('you just clicked the button');
}

function init() {
    document.getElementById('btn').onclick = alertUser;
}

window.onload = init;