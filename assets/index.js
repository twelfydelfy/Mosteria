let currentSlide = 1;
let currentSection = 0;
let languageVariable = 1;
const left = document.querySelector('.left-selector')
const right = document.querySelector('.right-selector')
const middle = document.querySelector('.middle-selector')
const slider = document.querySelector('.slider');
let leftState = false;
let rightState = false;
let middleState = false;  
let intervalul;

import { aperitive } from "./date";
import { supe } from "./date";
import { suplemente } from "./date";
import { pizza } from "./date";
import { burger } from "./date";
import { desert } from "./date";
import { carne } from "./date";
import { bauturi } from "./date";
import { alcool } from "./date";

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
function sections(){
    leftState = false;
    rightState = false;
    middleState = false;
    left.style.color = 'black';
    left.style.backgroundColor = '#F1F1F1';
    right.style.color = 'black';
    right.style.backgroundColor = '#F1F1F1';
    middle.style.color = 'black';
    middle.style.backgroundColor = '#F1F1F1';
    if(currentSection == 0){console.log(0)}
    else if(currentSection == 1){
        leftState = true;
        left.style.color = 'white';
        left.style.backgroundColor = '#B2241C';
    }
    else if(currentSection == 2){
        middleState = true;
        middle.style.color = 'white';
        middle.style.backgroundColor = '#B2241C';
    }
    else if(currentSection == 3){
        rightState = true;
        right.style.color = 'white';
        right.style.backgroundColor = '#B2241C';
    }
}
left.addEventListener('click', ()=>{
    if(leftState == false){
    currentSection = 1;
    sections();
}else{
    currentSection = 0;
    sections();
}
});
middle.addEventListener('click', ()=>{
    if(middleState == false){
    currentSection =2;
    sections();
}else{
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