// rollover-03-script.js

function rolloverDisplay() {
    document.getElementById('display').textContent = 'you hovered over the button';
}

function hoverOver() {
    document.getElementById('display').textContent = 'you hovered over the button';
}

function moveAway() {
    document.getElementById('display').textContent = 'you are not hovering over the button';
}

function buttonClick() {
    document.getElementById('display').textContent = 'you clicked the button';
}

function doubleClick() {
    document.getElementById('display').textContent = 'you double clicked the button';
}

function init() {
    document.getElementById('btn').onmouseover = hoverOver;
    document.getElementById('btn').onmouseout = moveAway;
    document.getElementById('btn').onclick = buttonClick;
    document.getElementById('btn').ondblclick = doubleClick;
}

window.onload = init;