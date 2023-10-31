let btnRed = document.querySelector('#btnRed');
let btnBlue = document.querySelector('#btnBlue');
let btnGreen = document.querySelector('#btnGreen');
let btnYellow = document.querySelector('#btnYellow');
let content = document.querySelector ('p');

btnRed.addEventListener('click', () => content.style.color = 'red');
btnBlue.addEventListener('click',() => content.style.color = 'blue');
btnGreen.addEventListener('click',() => content.style.color = 'green');
btnYellow.addEventListener('click',() => content.style.color = 'yellow');