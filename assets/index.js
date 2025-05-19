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
let HotelCurentSlide1 = 1;
let HotelCurentSlide2 = 1;
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
let languageButton = false;

document.querySelector('.language-button').addEventListener('click', ()=>{
    if(languageButton == false){
        document.querySelector('.button-opened').style.display = 'block';
        languageButton =true;
    }else{
        document.querySelector('.button-opened').style.display = 'none';
        languageButton = false;
    }
});

document.addEventListener('click', (e)=>{
    if(languageButton && !e.target.closest('.button-opened, .language-button')){
        document.querySelector('.button-opened').style.display = 'none';
        languageButton = false;
    }
})
function changeSlide() {
    slider.style.transition = 'all 0.4s ease-in';
    if (currentSlide > 4) currentSlide = 1;
    if (currentSlide < 1) currentSlide = 4;
    slider.style.marginLeft = `-${(currentSlide - 1) * 100}%`;
}
function HotelChangeSlide1(){
    if(HotelCurentSlide1 > 3) HotelCurentSlide1 = 1;
    if(HotelCurentSlide1 < 1) HotelCurentSlide1 = 3
    document.querySelector('.cameraslider').style.marginLeft = `-${(HotelCurentSlide1 - 1) * 100}%`;
}
function HotelChangeSlide2(){
    if(HotelCurentSlide2 > 5) HotelCurentSlide2 = 1;
    if(HotelCurentSlide2 < 1) HotelCurentSlide2 = 5;
    document.querySelector('.cameraslider2').style.marginLeft = `-${(HotelCurentSlide2 - 1) * 100}%`;
}

function resetInterval() {
    clearInterval(intervalul);
    intervalul = setInterval(() => {
        currentSlide++;
        changeSlide();
    }, 30000000);
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.section, .despre, .camera, .camera2, .contacts-container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        element.classList.add('fade-in-up');
        observer.observe(element);
    });
});


document.querySelector('.right-arrow-box').addEventListener('click', () => {
    currentSlide++;
    changeSlide();
    resetInterval();
});

document.querySelector('.left-arrow-box').addEventListener('click', () => {
    currentSlide--;
    changeSlide();
    // resetInterval();
    
});
document.querySelector('.c-leftarrowbox1').addEventListener('click', ()=>{
    HotelCurentSlide1--;
    HotelChangeSlide1();
})
document.querySelector('.c-rightarrowbox1').addEventListener('click', ()=>{
    HotelCurentSlide1++;
    HotelChangeSlide1();
});
document.querySelector('.c-leftarrowbox2').addEventListener('click', ()=>{
    HotelCurentSlide2--;
    HotelChangeSlide2();
})
document.querySelector('.c-rightarrowbox2').addEventListener('click', ()=>{
    HotelCurentSlide2++;
    HotelChangeSlide2();
});
sections();
document.querySelector('.opened1').addEventListener('click', ()=>{
    languageVariable = 1;
    mainRender();
    document.querySelector('.button-opened').style.display = 'none';
    languageButton = false;
})
document.querySelector('.opened2').addEventListener('click', ()=>{
    languageVariable = 2;
    mainRender();
    document.querySelector('.button-opened').style.display = 'none';
    languageButton = false;
})
document.querySelector('.opened3').addEventListener('click', ()=>{
    languageVariable = 3;
    mainRender();
    document.querySelector('.button-opened').style.display = 'none';
    languageButton = false;
})
 resetInterval();
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
function mainRender(){
    document.querySelector('.contacts-button').innerHTML = `${languageVariable == 1 ? 'Contacte' : languageVariable == 2? 'Контакты' : 'Contacts'}`
    document.querySelector('.left-selector').innerHTML = `${languageVariable == 1 ? 'Restaurant' : languageVariable == 2? 'Ресторан' : 'Restaurant'}`
    document.querySelector('.middle-selector').innerHTML = `${languageVariable == 1? 'Hostel' : languageVariable == 2? ' Гостиница' : 'Hostel'}`
    document.querySelector('.contacts-title').innerHTML = `${languageVariable == 1? 'Ne găsești la': languageVariable == 2? 'Найди нас в' : 'Find us at'}`
    document.querySelector('.contacts p').innerHTML = `${languageVariable == 1? 'Strada Chișinăului 22': languageVariable == 2? 'Улица Кишинёва 22' : 'Chișinău Street 22'}`
    document.querySelector('#despretxt2').innerHTML = `${languageVariable == 1? 'Bine ați venit la Hostel, aflat la doar câțiva pași de Restaurantul Mosteria, oferim cazare primitoare, cu camere confortabile și o atmosferă caldă, perfectă pentru odihnă și relaxare. Dacă ai nevoie de un loc peste noapte sau dacă călătorești prin zonă, hostelul nostru este alegerea ideală!': languageVariable == 2? 'Добро пожаловать в наш хостел, расположенный всего в нескольких шагах от ресторана Мостерия! Мы предлагаем уютное размещение с комфортабельными номерами и теплой атмосферой, идеально подходящей для отдыха и релакса. Если вам нужно место для ночлега или вы путешествуете по окрестностям, наш хостел — идеальный выбор!' : 'Welcome to our hostel, located just a few steps from Mosteria Restaurant! We offer cozy accommodation with comfortable rooms and a warm atmosphere, perfect for rest and relaxation. Whether you need a place for the night or are traveling through the area, our hostel is the ideal choice!'}`;
    document.querySelector('#despretxt').innerHTML = `${languageVariable == 1? 'Bine ați venit la Restaurantul Mosteria, un colț al Italiei ascuns în inima Anenilor Noi! Aici, savoarea bucătăriei italiene prinde viață în fiecare farfurie, iar vinurile atent selecționate completează perfect o experiență culinară de neuitat. Vă invităm să vă bucurați de arome autentice, ospitalitate caldă și un strop de dolce vita, chiar la noi acasă!' : languageVariable == 2? 'Добро пожаловать в ресторан Mosteria, уголок Италии, спрятанный в самом сердце Анений Ной! Здесь вкус итальянской кухни оживает в каждом блюде, а тщательно подобранные вина идеально дополняют незабываемое кулинарное путешествие. Приглашаем насладиться аутентичными ароматами, теплым гостеприимством и частичкой dolce vita прямо у нас!' : 'Welcome to Mosteria Restaurant, a slice of Italy tucked away in the heart of Anenii Noi! Here, the flavors of Italian cuisine come to life in every dish, and carefully selected wines perfectly complement an unforgettable culinary experience. We invite you to savor authentic aromas, warm hospitality, and a touch of dolce vita, right at our home!'}`;
    renderMenu();
}
mainRender()
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

function renderMenu() {
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
                        <img src="assets/images/menu/${aperitiv.id}.jpg" class="imagebox">
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
                        <img src="assets/images/menu/${supa.id}.jpg" class="imagebox">
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
                    <img src="assets/images/menu/${supliment.id}.jpg" class="imagebox">
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
                    <img src="assets/images/menu/${piza.id}.jpg" class="imagebox">
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
                    <img src="assets/images/menu/${burg.id}.jpg" class="imagebox">
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
                    <img src="assets/images/menu/${des.id}.jpg" class="imagebox">
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
                    <img src="assets/images/menu/${carn.id}.jpg" class="imagebox">
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
                    <img src="assets/images/menu/${bautura.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${bautura.gramaj} ${languageVariable == 2 ? 'мл': 'ml' }</p>
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
                    <img src="assets/images/menu/${alc.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${alc.gramaj} ${languageVariable == 2 ? 'мл': 'ml' }</p>
                        <p class="price">${alc.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? alc.nume : languageVariable == 2 ? alc.numerus : alc.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? alc.descriere : languageVariable == 2 ? alc.descriererus : alc.descriereeng}</p>
        </div>`
});
}
renderMenu();
function renderHotel(){
    document.querySelector('.section2 h1').innerHTML = `${languageVariable == 1? 'Camere oferite' : languageVariable ==2 ? 'Предлагаемые номера': 'Rooms Offered'}`
    document.querySelector('.')
}
/*function renderFoodTruck(languageVariable) {
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
renderFoodTruck(languageVariable);*/

//Animation
document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll(".left-selector, .middle-selector, .box"),
        t = () => {
            let t = 1 * window.innerHeight;
            e.forEach(e => {
                let i = e.getBoundingClientRect().top;
                i < t ? e.classList.add("show") : e.classList.remove("show");
            });
        };
    window.addEventListener("scroll", t);
    t();
});