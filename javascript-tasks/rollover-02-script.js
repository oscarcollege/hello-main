// rollover-02-script.js

function rolloverAlert() {
    alert('you have just hovered your mouse over a button')
}

function init() {
    document.getElementById('btn').onmouseover = rolloverAlert;
}

window.onload = init;