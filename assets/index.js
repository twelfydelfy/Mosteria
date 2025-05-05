import { aperitive } from "./date.js";
/*import { supe } from "./date";
import { suplemente } from "./date";
import { pizza } from "./date";
import { burger } from "./date";
import { desert } from "./date";
import { carne } from "./date";
import { bauturi } from "./date";
import { alcool } from "./date";*/

let currentSlide = 1;
let currentSection = 0;
let languageVariable = 2;
const left = document.querySelector('.left-selector')
const right = document.querySelector('.right-selector')
const middle = document.querySelector('.middle-selector')
const slider = document.querySelector('.slider');
let leftState = false;
let rightState = false;
let middleState = false;
let intervalul;

function changeSlide() {
    slider.style.transition = 'all 0.4s ease-in';
    if (currentSlide > 3) currentSlide = 1;
    if (currentSlide < 1) currentSlide = 3;
    slider.style.marginLeft = `-${(currentSlide - 1) * 100}%`;
}

function resetInterval() {
    clearInterval(intervalul);
    intervalul = setInterval(() => {
        currentSlide++;
        changeSlide();
    }, 5000);
}

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentSlide++;
    changeSlide();
    resetInterval();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentSlide--;
    changeSlide();
    resetInterval();
});

resetInterval();
function sections() {
    leftState = false;
    rightState = false;
    middleState = false;
    left.style.color = 'black';
    left.style.backgroundColor = '#F1F1F1';
    right.style.color = 'black';
    right.style.backgroundColor = '#F1F1F1';
    middle.style.color = 'black';
    middle.style.backgroundColor = '#F1F1F1';
    if (currentSection == 0) { console.log(0) }
    else if (currentSection == 1) {
        leftState = true;
        left.style.color = 'white';
        left.style.backgroundColor = '#B2241C';
    }
    else if (currentSection == 2) {
        middleState = true;
        middle.style.color = 'white';
        middle.style.backgroundColor = '#B2241C';
    }
    else if (currentSection == 3) {
        rightState = true;
        right.style.color = 'white';
        right.style.backgroundColor = '#B2241C';
    }
}
left.addEventListener('click', () => {
    if (leftState == false) {
        currentSection = 1;
        sections();
    } else {
        currentSection = 0;
        sections();
    }
});
middle.addEventListener('click', () => {
    if (middleState == false) {
        currentSection = 2;
        sections();
    } else {
        currentSection = 0;
        sections();
    }
})
right.addEventListener('click', () => {
    if (rightState == false) {
        currentSection = 3;
        sections();
    } else {
        currentSection = 0;
        sections();
    }
});

function render(languageVariable) {
    if (languageVariable == 1) {
        document.querySelector('.h1').innerHTML = 'Aperitive';
        document.querySelector('.h2').innerHTML = 'Supe';
        document.querySelector('.h3').innerHTML = 'Suplemente';
        document.querySelector('.h4').innerHTML = 'Pizza';
        document.querySelector('.h5').innerHTML = 'Burgeri';
        document.querySelector('.h6').innerHTML = 'Desert';
        document.querySelector('.h7').innerHTML = 'Bucate';
        document.querySelector('.h8').innerHTML = 'Băuturi';
    } else if (languageVariable == 2) {
        document.querySelector('.h1').innerHTML = 'Аппетитки';
        document.querySelector('.h2').innerHTML = 'Супы';
        document.querySelector('.h3').innerHTML = 'Добавки';
        document.querySelector('.h4').innerHTML = 'Пицца';
        document.querySelector('.h5').innerHTML = 'Бургеры';
        document.querySelector('.h6').innerHTML = 'Десерты';
        document.querySelector('.h7').innerHTML = 'Блюда';
        document.querySelector('.h8').innerHTML = 'Напитки';
    }
    else {
        document.querySelector('.h1').innerHTML = 'Appetizers';
        document.querySelector('.h2').innerHTML = 'Soups';
        document.querySelector('.h3').innerHTML = 'Supplements';
        document.querySelector('.h4').innerHTML = 'Pizza';
        document.querySelector('.h5').innerHTML = 'Burgers';
        document.querySelector('.h6').innerHTML = 'Desserts';
        document.querySelector('.h7').innerHTML = 'Dishes';
        document.querySelector('.h8').innerHTML = 'Drinks';
    }
    document.querySelector('.c1').innerHTML = `${languageVariable == 1 ? 'salut' : languageVariable == 2 ? 'привет' : languageVariable == 3 ? 'hello' : undefined}`
}
render(languageVariable);