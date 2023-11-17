/*buttons = document.getElementsByClassName('box');

for (let i=0; i<buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener('click', () => {
        button.style.backgroundColor = 'black';
        button.innerHTML = 'completed';
        let parentElement = button.parentElement;
        let textElement = parentElement.getElementsByTagName('span')[0];
        textElement.style.textDecoration = 'line-through';
    });
}*/

$(document).ready(function() {
    $(".box").click(function() {
        $(this).css('background-color', 'black');
        $(this).text('completed');
        $(this).parent().children('.text').css('text-decoration', 'line-through');
    });
});

