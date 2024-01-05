/* Exercițiul 9
Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, atunci când se face click 
pe button.change-color și afișați valoarea culorii în span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */

const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', changeBackgroundColor);


function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
