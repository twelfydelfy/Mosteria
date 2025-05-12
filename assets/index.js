import { aperitive } from "./date.js";
import { supe } from "./date.js";
import { suplemente } from "./date.js";
import { pizza } from "./date.js";
import { burger } from "./date.js";
import { desert } from "./date.js";
import { carne } from "./date.js";
import { bauturi } from "./date.js";
import { alcool } from "./date.js";

let currentSlide = 1;
let currentSection = 0;
let languageVariable = 1;
const left = document.querySelector('.left-selector')
//const right = document.querySelector('.right-selector')
const middle = document.querySelector('.middle-selector')
const slider = document.querySelector('.slider');
let leftState = false;
//let rightState = false;
let middleState = false;
let intervalul;

function changeSlide() {
    slider.style.transition = 'all 0.4s ease-in';
    if (currentSlide > 4) currentSlide = 1;
    if (currentSlide < 1) currentSlide = 4;
    slider.style.marginLeft = `-${(currentSlide - 1) * 100}%`;
}

/*
function resetInterval() {
    clearInterval(intervalul);
    intervalul = setInterval(() => {
        currentSlide++;
        changeSlide();
    }, 5000);
}
*/

document.querySelector('.right-arrow-box').addEventListener('click', () => {
    currentSlide++;
    changeSlide();
    // resetInterval();
});

document.querySelector('.left-arrow-box').addEventListener('click', () => {
    currentSlide--;
    changeSlide();
    // resetInterval();
});
sections();
// resetInterval();
function sections() {
    leftState = false;
    //rightState = false;
    middleState = false;
    left.style.color = 'black';
    left.style.backgroundColor = '#F1F1F1';
    //right.style.color = 'black';
    //right.style.backgroundColor = '#F1F1F1';
    middle.style.color = 'black';
    middle.style.backgroundColor = '#F1F1F1';
    document.querySelector('.section1').style.display = 'none';
    document.querySelector('.section2').style.display = 'none';
    //document.querySelector('.section3').style.display = 'none';
    if (currentSection == 0) { console.log(0) }
    else if (currentSection == 1) {
        leftState = true;
        left.style.color = 'white';
        left.style.backgroundColor = '#B2241C';
        document.querySelector('.section1').style.display = 'block';
    }
    else if (currentSection == 2) {
        middleState = true;
        middle.style.color = 'white';
        middle.style.backgroundColor = '#B2241C';
        document.querySelector('.section2').style.display = 'block';
    }
    /*else if (currentSection == 3) {
        rightState = true;
        right.style.color = 'white';
        right.style.backgroundColor = '#B2241C';
        document.querySelector('.section3').style.display = 'block';
    }*/
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
/*right.addEventListener('click', () => {
    if (rightState == false) {
        currentSection = 3;
        sections();
    } else {
        currentSection = 0;
        sections();
    }
});*/

function renderMenu(languageVariable) {
    document.querySelector('.h1').innerHTML = `${languageVariable == 1 ? 'Aperitive' : languageVariable == 2 ? 'Аппетитки' : 'Appetizers'}`;
    document.querySelector('.h2').innerHTML = `${languageVariable == 1 ? 'Supe' : languageVariable == 2 ? 'Супы' : 'Soups'}`;
    document.querySelector('.h3').innerHTML = `${languageVariable == 1 ? 'Suplemente' : languageVariable == 2 ? 'Добавки' : 'Supplements'}`;
    document.querySelector('.h4').innerHTML = `${languageVariable == 1 ? 'Pizza' : languageVariable == 2 ? 'Пицца' : 'Pizza'}`;
    document.querySelector('.h5').innerHTML = `${languageVariable == 1 ? 'Burgeri' : languageVariable == 2 ? 'Бургеры' : 'Burgers'}`;
    document.querySelector('.h6').innerHTML = `${languageVariable == 1 ? 'Desert' : languageVariable == 2 ? 'Десерты' : 'Desserts'}`;
    document.querySelector('.h7').innerHTML = `${languageVariable == 1 ? 'Bucate' : languageVariable == 2 ? 'Блюда' : 'Dishes'}`;
    document.querySelector('.h8').innerHTML = `${languageVariable == 1 ? 'Băuturi' : languageVariable == 2 ? 'Напитки' : 'Drinks'}`;
    document.querySelector('.c1').innerHTML = `${languageVariable == 1 ? 'Aperitive' : languageVariable == 2 ? 'Аппетитки' : 'Appetizers'}`;
    document.querySelector('.c2').innerHTML = `${languageVariable == 1 ? 'Supe' : languageVariable == 2 ? 'Супы' : 'Soups'}`;
    document.querySelector('.c3').innerHTML = `${languageVariable == 1 ? 'Suplemente' : languageVariable == 2 ? 'Добавки' : 'Supplements'}`;
    document.querySelector('.c4').innerHTML = `${languageVariable == 1 ? 'Pizza' : languageVariable == 2 ? 'Пицца' : 'Pizza'}`;
    document.querySelector('.c5').innerHTML = `${languageVariable == 1 ? 'Burgeri' : languageVariable == 2 ? 'Бургеры' : 'Burgers'}`;
    document.querySelector('.c6').innerHTML = `${languageVariable == 1 ? 'Desert' : languageVariable == 2 ? 'Десерты' : 'Desserts'}`;
    document.querySelector('.c7').innerHTML = `${languageVariable == 1 ? 'Bucate' : languageVariable == 2 ? 'Блюда' : 'Dishes'}`;
    document.querySelector('.c8').innerHTML = `${languageVariable == 1 ? 'Băuturi' : languageVariable == 2 ? 'Напитки' : 'Drinks'}`;
    document.querySelector('.c9').innerHTML = `${languageVariable == 1 ? 'Alcool' : languageVariable == 2 ? 'Aлкоголь' : 'Alcohol'}`;

    document.querySelector('.menuc1').innerHTML = '';
    aperitive.forEach(aperitiv => {
        document.querySelector('.menuc1').innerHTML +=
            `<div class="box">
                        <div class="upperdeck">
                        <img src="assets/images/white.png" class="imagebox">
                        <div class="pricebox">
                            <p class="quantity">${aperitiv.gramaj} ${languageVariable == 2 ? 'г' : 'g'}</p>
                            <p class="price">${aperitiv.pret} MDL</p>
                        </div></div>
                        <h2 class="productName"> ${languageVariable == 1 ? aperitiv.nume : languageVariable == 2 ? aperitiv.numerus : aperitiv.numeeng}</h2>
                        <p class="productDescription">${languageVariable == 1 ? aperitiv.descriere : languageVariable == 2 ? aperitiv.descriererus : aperitiv.descriereeng}</p>
            </div>`
    });
    document.querySelector('.menuc2').innerHTML = '';
    supe.forEach(supa => {
        document.querySelector('.menuc2').innerHTML +=
            `<div class="box">
                        <div class="upperdeck">
                        <img src="assets/images/white.png" class="imagebox">
                        <div class="pricebox">
                            <p class="quantity">${supa.gramaj} ${languageVariable == 2 ? 'г' : 'g'}</p>
                            <p class="price">${supa.pret} MDL</p>
                        </div></div>
                        <h2 class="productName"> ${languageVariable == 1 ? supa.nume : languageVariable == 2 ? supa.numerus : supa.numeeng}</h2>
                        <p class="productDescription">${languageVariable == 1 ? supa.descriere : languageVariable == 2 ? supa.descriererus : supa.descriereeng}</p>
            </div>`
    });
    document.querySelector('.menuc3').innerHTML = '';
    suplemente.forEach(supliment => {
        document.querySelector('.menuc3').innerHTML +=
            `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/white.png" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${supliment.gramaj} ${languageVariable == 2 ? 'г' : 'g'}</p>
                        <p class="price">${supliment.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? supliment.nume : languageVariable == 2 ? supliment.numerus : supliment.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? supliment.descriere : languageVariable == 2 ? supliment.descriererus : supliment.descriereeng}</p>
        </div>`
    });
    document.querySelector('.menuc4').innerHTML = '';
    pizza.forEach(piza => {
    document.querySelector('.menuc4').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/white.png" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${piza.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${piza.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? piza.nume : languageVariable == 2 ? piza.numerus : piza.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? piza.descriere : languageVariable == 2 ? piza.descriererus : piza.descriereeng}</p>
        </div>`
});
document.querySelector('.menuc5').innerHTML = '';
burger.forEach(burg => {
    document.querySelector('.menuc5').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/white.png" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${burg.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${burg.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? burg.nume : languageVariable == 2 ? burg.numerus : burg.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? burg.descriere : languageVariable == 2 ? burg.descriererus : burg.descriereeng}</p>
        </div>`
});
document.querySelector('.menuc6').innerHTML = '';
desert.forEach(des => {
    document.querySelector('.menuc6').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/white.png" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${des.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${des.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? des.nume : languageVariable == 2 ? des.numerus : des.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? des.descriere : languageVariable == 2 ? des.descriererus : des.descriereeng}</p>
        </div>`
});

document.querySelector('.menuc7').innerHTML = '';
carne.forEach(carn => {
    document.querySelector('.menuc7').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/white.png" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${carn.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${carn.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? carn.nume : languageVariable == 2 ? carn.numerus : carn.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? carn.descriere : languageVariable == 2 ? carn.descriererus : carn.descriereeng}</p>
        </div>`
});
document.querySelector('.menuc8').innerHTML = '';
bauturi.forEach(bautura => {
    document.querySelector('.menuc8').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/white.png" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${bautura.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${bautura.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? bautura.nume : languageVariable == 2 ? bautura.numerus : bautura.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? bautura.descriere : languageVariable == 2 ? bautura.descriererus : bautura.descriereeng}</p>
        </div>`
});
document.querySelector('.menuc9').innerHTML = '';
alcool.forEach(alc => {
    document.querySelector('.menuc9').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/white.png" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${alc.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${alc.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? alc.nume : languageVariable == 2 ? alc.numerus : alc.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? alc.descriere : languageVariable == 2 ? alc.descriererus : alc.descriereeng}</p>
        </div>`
});
}
renderMenu(languageVariable);

function renderFoodTruck(languageVariable) {
    document.querySelector('.fh1').innerHTML = `${languageVariable == 1 ? 'Aperitive' : languageVariable == 2 ? 'Аппетитки' : 'Appetizers'}`;
    document.querySelector('.fh2').innerHTML = `${languageVariable == 1 ? 'Supe' : languageVariable == 2 ? 'Супы' : 'Soups'}`;
    document.querySelector('.fh3').innerHTML = `${languageVariable == 1 ? 'Suplemente' : languageVariable == 2 ? 'Добавки' : 'Supplements'}`;
    document.querySelector('.fh4').innerHTML = `${languageVariable == 1 ? 'Pizza' : languageVariable == 2 ? 'Пицца' : 'Pizza'}`;
    document.querySelector('.fh5').innerHTML = `${languageVariable == 1 ? 'Burgeri' : languageVariable == 2 ? 'Бургеры' : 'Burgers'}`;
    document.querySelector('.fh6').innerHTML = `${languageVariable == 1 ? 'Desert' : languageVariable == 2 ? 'Десерты' : 'Desserts'}`;
    document.querySelector('.fh7').innerHTML = `${languageVariable == 1 ? 'Bucate' : languageVariable == 2 ? 'Блюда' : 'Dishes'}`;
    document.querySelector('.fh8').innerHTML = `${languageVariable == 1 ? 'Băuturi' : languageVariable == 2 ? 'Напитки' : 'Drinks'}`;
    document.querySelector('.fc1').innerHTML = `${languageVariable == 1 ? 'salut' : languageVariable == 2 ? 'привет' : languageVariable == 3 ? 'hello' : undefined}`
}
renderFoodTruck(languageVariable);