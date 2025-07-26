import { gustari } from "./date2.js";
import { supe } from "./date2.js";
import { pizza } from "./date2.js";
import { bucate } from "./date2.js";
import { burgere } from "./date2.js";
import { plato } from "./date2.js";
import { desert } from "./date2.js";
import { calde } from "./date2.js";
import { bauturi } from "./date2.js";
import { alcool } from "./date2.js";
import { bere } from "./date2.js";
import { vin } from "./date2.js";

let currentSlide = 1;
let HotelCurentSlide1 = 1;
let HotelCurentSlide2 = 1;
let currentSection = 1;
let languageVariable = JSON.parse(localStorage.getItem('languageVariable') || '1');
let mCategsState = false;

const left = document.querySelector('.left-selector')
//const right = document.querySelector('.right-selector')
const middle = document.querySelector('.middle-selector')
const slider = document.querySelector('.slider');
const mbuton = document.querySelector('.mbuton');
const categsMobile = document.querySelector('.categs-mobile');
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


document.querySelector('.mbuton').addEventListener('click', () => {
    mbutonHandler();
});

function mbutonHandler(){
    const innerWidth = window.innerWidth;
    if(!mCategsState){
        document.querySelectorAll('.categs-mobile a').forEach(a => a.style.opacity = '0');
        if(innerWidth <= 768){
        mbuton.style.width = '95%';}
        else{
            mbuton.style.width = '50%';
        }
        mbuton.style.right = '2.5%';
        categsMobile.style.display = 'flex';
        setTimeout(()=>{
            if(innerWidth <= 768){
            categsMobile.style.width = '95%';}
            else{
                categsMobile.style.width = '50%';
            }
            document.querySelectorAll('.categs-mobile a').forEach(a => a.style.opacity = '1')
        }, 250)
        mCategsState = true;
    }
    else if(mCategsState){
        categsMobile.style.width = '0%';
        setTimeout(()=>{
            categsMobile.style.display = 'none';
            mbuton.style.width = '48px';
            mbuton.style.right = '15px';
        }, 250);
        mCategsState = false;
    }
}
document.querySelectorAll('.categs-mobile a').forEach(a => {
    a.addEventListener('click', ()=>{
        mCategsState = true;
        mbutonHandler();
    })
})
function changeSlide() {
    slider.style.transition = 'all 0.6s ease-in';
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
    }, 3000);
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


/*document.querySelector('.right-arrow-box').addEventListener('click', () => {
    currentSlide++;
    changeSlide();
    resetInterval();
});*/

/*document.querySelector('.left-arrow-box').addEventListener('click', () => {
    currentSlide--;
    changeSlide();
    // resetInterval();
    
});*/
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
    document.querySelector('.language-button').innerHTML = `<img src="assets/images/globe.png"> ${'RO'}`
    mainRender();
    document.querySelector('.button-opened').style.display = 'none';
    languageButton = false;
})
document.querySelector('.opened2').addEventListener('click', ()=>{
    languageVariable = 2;
    document.querySelector('.language-button').innerHTML = `<img src="assets/images/globe.png"> ${'RU'}`
    mainRender();
    document.querySelector('.button-opened').style.display = 'none';
    languageButton = false;
})
document.querySelector('.opened3').addEventListener('click', ()=>{
    languageVariable = 3;
    document.querySelector('.language-button').innerHTML = `<img src="assets/images/globe.png"> ${'EN'}`
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
    document.querySelector('.contacts p').innerHTML = `${languageVariable == 1? 'Strada Chișinăului 22, Anenii Noi': languageVariable == 2? 'Улица Кишинёва 22, Новые Анены' : 'Chișinău Street 22 Anenii Noi'}`
    document.querySelector('#despretxt2').innerHTML = `${languageVariable == 1? 'Bine ați venit la Hostel, aflat la doar câțiva pași de Restaurantul Mosteria, oferim cazare primitoare, cu camere confortabile și o atmosferă caldă, perfectă pentru odihnă și relaxare. Dacă ai nevoie de un loc peste noapte sau dacă călătorești prin zonă, hostelul nostru este alegerea ideală!': languageVariable == 2? 'Добро пожаловать в наш хостел, расположенный всего в нескольких шагах от ресторана Мостерия! Мы предлагаем уютное размещение с комфортабельными номерами и теплой атмосферой, идеально подходящей для отдыха и релакса. Если вам нужно место для ночлега или вы путешествуете по окрестностям, наш хостел — идеальный выбор!' : 'Welcome to our hostel, located just a few steps from Mosteria Restaurant! We offer cozy accommodation with comfortable rooms and a warm atmosphere, perfect for rest and relaxation. Whether you need a place for the night or are traveling through the area, our hostel is the ideal choice!'}`;
    document.querySelector('#despretxt').innerHTML = `${languageVariable == 1? 'Bine ați venit la Restaurantul Mosteria, un colț al Italiei ascuns în inima Anenilor Noi! Aici, savoarea bucătăriei italiene prinde viață în fiecare farfurie, iar vinurile atent selecționate completează perfect o experiență culinară de neuitat. Vă invităm să vă bucurați de arome autentice, ospitalitate caldă și un strop de dolce vita, chiar la noi acasă!' : languageVariable == 2? 'Добро пожаловать в ресторан Mosteria, уголок Италии, спрятанный в самом сердце Анений Ной! Здесь вкус итальянской кухни оживает в каждом блюде, а тщательно подобранные вина идеально дополняют незабываемое кулинарное путешествие. Приглашаем насладиться аутентичными ароматами, теплым гостеприимством и частичкой dolce vita прямо у нас!' : 'Welcome to Mosteria Restaurant, a slice of Italy tucked away in the heart of Anenii Noi! Here, the flavors of Italian cuisine come to life in every dish, and carefully selected wines perfectly complement an unforgettable culinary experience. We invite you to savor authentic aromas, warm hospitality, and a touch of dolce vita, right at our home!'}`;
    document.querySelector('.credentials p').innerHTML = `${languageVariable == 1? 'Creat de <a href="https://www.linkedin.com/in/fortuna-daniel" target="_blank">F. Daniel</a>' : languageVariable ==2? 'Сделано <a href="https://www.linkedin.com/in/fortuna-daniel" target="_blank">F. Daniel</a>' : 'Made by <a href="https://www.linkedin.com/in/fortuna-daniel" target="_blank">F. Daniel</a>'}`
    document.querySelector('.language-button').innerHTML = `<img src="assets/images/globe.png"> ${languageVariable == 1? 'RO' : languageVariable == 2? 'RU' : 'EN'}`;
    document.querySelector('.ht1').innerHTML = `${languageVariable == 1? 'Bine ați' : languageVariable == 2? 'Добро' : 'Welcome'}`;
    document.querySelector('.ht2').innerHTML = `${languageVariable == 1? 'venit la' : languageVariable == 2? 'пожаловать в' : 'to'}`;
    renderMenu();
    renderHotel();
    animations();
    localStorage.setItem('languageVariable', JSON.stringify(languageVariable));


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
    animations();
});
middle.addEventListener('click', () => {
    if (middleState == false) {
        currentSection = 2;
        sections();
    } else {
        currentSection = 0;
        sections();
    }
    animations();
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
    document.querySelectorAll('.h1').forEach(h1 => h1.innerHTML = `${languageVariable == 1 ? 'Gustări' : languageVariable == 2 ? 'Закуски' : 'Starters'}`);
document.querySelectorAll('.h2').forEach(h2 => h2.innerHTML = `${languageVariable == 1 ? 'Supe' : languageVariable == 2 ? 'Супы' : 'Soups'}`);
document.querySelectorAll('.h3').forEach(h3 => h3.innerHTML = `${languageVariable == 1 ? 'Pizza' : languageVariable == 2 ? 'Пицца' : 'Pizza'}`);
document.querySelectorAll('.h4').forEach(h4 => h4.innerHTML = `${languageVariable == 1 ? 'Bucate' : languageVariable == 2 ? 'Блюда' : 'Dishes'}`);
document.querySelectorAll('.h5').forEach(h5 => h5.innerHTML = `${languageVariable == 1 ? 'Burgeri' : languageVariable == 2 ? 'Бургеры' : 'Burgers'}`);
document.querySelectorAll('.h6').forEach(h6 => h6.innerHTML = `${languageVariable == 1 ? 'Plato' : languageVariable == 2 ? 'Плато' : 'Plateau'}`);
document.querySelectorAll('.h7').forEach(h7 => h7.innerHTML = `${languageVariable == 1 ? 'Desert' : languageVariable == 2 ? 'Десерты' : 'Desserts'}`);
document.querySelectorAll('.h8').forEach(h8 => h8.innerHTML = `${languageVariable == 1 ? 'Băuturi calde' : languageVariable == 2 ? 'Горячие напитки' : 'Hot drinks'}`);
document.querySelectorAll('.h9').forEach(h9 => h9.innerHTML = `${languageVariable == 1 ? 'Băuturi reci' : languageVariable == 2 ? 'Холодные напитки' : 'Cold drinks'}`);
document.querySelectorAll('.h10').forEach(h10 => h10.innerHTML = `${languageVariable == 1 ? 'Alcool' : languageVariable == 2 ? 'Aлкоголь' : 'Alcool'}`);
document.querySelectorAll('.h11').forEach(h11 => h11.innerHTML = `${languageVariable == 1 ? 'Bere' : languageVariable == 2 ? 'Пиво' : 'Beer'}`);
document.querySelectorAll('.h12').forEach(h12 => h12.innerHTML = `${languageVariable == 1 ? 'Vinuri' : languageVariable == 2 ? 'Вино' : 'Wines'}`);
    document.querySelector('.c1').innerHTML = `${languageVariable == 1 ? 'Gustări' : languageVariable == 2 ? 'Закуски' : 'Starters'}`;
document.querySelector('.c2').innerHTML = `${languageVariable == 1 ? 'Supe' : languageVariable == 2 ? 'Супы' : 'Soups'}`;
document.querySelector('.c3').innerHTML = `${languageVariable == 1 ? 'Pizza' : languageVariable == 2 ? 'Пицца' : 'Pizza'}`;
document.querySelector('.c4').innerHTML = `${languageVariable == 1 ? 'Bucate' : languageVariable == 2 ? 'Блюда' : 'Dishes'}`;
document.querySelector('.c5').innerHTML = `${languageVariable == 1 ? 'Burgeri' : languageVariable == 2 ? 'Бургеры' : 'Burgers'}`;
document.querySelector('.c6').innerHTML = `${languageVariable == 1 ? 'Plato' : languageVariable == 2 ? 'Плато' : 'Plateau'}`;
document.querySelector('.c7').innerHTML = `${languageVariable == 1 ? 'Desert' : languageVariable == 2 ? 'Десерты' : 'Desserts'}`;
document.querySelector('.c8').innerHTML = `${languageVariable == 1 ? 'Băuturi calde' : languageVariable == 2 ? 'Горячие напитки' : 'Hot drinks'}`;
document.querySelector('.c9').innerHTML = `${languageVariable == 1 ? 'Băuturi reci' : languageVariable == 2 ? 'Холодные напитки' : 'Cold drinks'}`;
document.querySelector('.c10').innerHTML = `${languageVariable == 1 ? 'Alcool' : languageVariable == 2 ? 'Aлкоголь' : 'Alcool'}`;
document.querySelector('.c11').innerHTML = `${languageVariable == 1 ? 'Bere' : languageVariable == 2 ? 'Пиво' : 'Beer'}`;
document.querySelector('.c12').innerHTML = `${languageVariable == 1 ? 'Vinuri' : languageVariable == 2 ? 'Вино' : 'Wines'}`;

    document.querySelector('.menuc1').innerHTML = '';
    gustari.forEach(gustare => {
        document.querySelector('.menuc1').innerHTML +=
            `<div class="box">
                        <div class="upperdeck">
                        <img src="assets/images/menu/${gustare.id}.jpg" class="imagebox">
                        <div class="pricebox">
                            <p class="quantity">${gustare.gramaj} ${languageVariable == 2 ? 'г' : 'g'}</p>
                            <p class="price">${gustare.pret} MDL</p>
                        </div></div>
                        <h2 class="productName"> ${languageVariable == 1 ? gustare.nume : languageVariable == 2 ? gustare.numerus : gustare.numeeng}</h2>
                        <p class="productDescription">${languageVariable == 1 ? gustare.descriere : languageVariable == 2 ? gustare.descriererus : gustare.descriereeng}</p>
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
    pizza.forEach(piza => {
        document.querySelector('.menuc3').innerHTML +=
            `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${piza.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${piza.gramaj} ${languageVariable == 2 ? 'г' : 'g'}</p>
                        <p class="price">${piza.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? piza.nume : languageVariable == 2 ? piza.numerus : piza.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? piza.descriere : languageVariable == 2 ? piza.descriererus : piza.descriereeng}</p>
        </div>`
    });
    document.querySelector('.menuc4').innerHTML = '';
bucate.forEach(bucata => {
    document.querySelector('.menuc4').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${bucata.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${bucata.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${bucata.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? bucata.nume : languageVariable == 2 ? bucata.numerus : bucata.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? bucata.descriere : languageVariable == 2 ? bucata.descriererus : bucata.descriereeng}</p>
        </div>`
});
document.querySelector('.menuc5').innerHTML = '';
burgere.forEach(burger => {
    document.querySelector('.menuc5').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${burger.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${burger.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${burger.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? burger.nume : languageVariable == 2 ? burger.numerus : burger.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? burger.descriere : languageVariable == 2 ? burger.descriererus : burger.descriereeng}</p>
        </div>`
});
document.querySelector('.menuc6').innerHTML = '';
plato.forEach(plat => {
    document.querySelector('.menuc6').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${plat.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${plat.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${plat.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? plat.nume : languageVariable == 2 ? plat.numerus : plat.numeeng}</h2>
                    <p class="productDescription">${languageVariable == 1 ? plat.descriere : languageVariable == 2 ? plat.descriererus : plat.descriereeng}</p>
        </div>`
});

document.querySelector('.menuc7').innerHTML = '';
desert.forEach(des => {
    document.querySelector('.menuc7').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${des.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${des.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${des.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? des.nume : languageVariable == 2 ? des.numerus : des.numeeng}</h2>
        </div>`
});
document.querySelector('.menuc8').innerHTML = '';
calde.forEach(cald => {
    document.querySelector('.menuc8').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${cald.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${cald.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${cald.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? cald.nume : languageVariable == 2 ? cald.numerus : cald.numeeng}</h2>
                    <p class="productDescription"></p>
        </div>`
});
document.querySelector('.menuc9').innerHTML = '';
bauturi.forEach(bautura => {
    document.querySelector('.menuc9').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${bautura.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${bautura.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${bautura.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? bautura.nume : languageVariable == 2 ? bautura.numerus : bautura.numeeng}</h2>
        </div>`
});
document.querySelector('.menuc10').innerHTML = '';
alcool.forEach(alc => {
    document.querySelector('.menuc10').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${alc.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${alc.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${alc.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? alc.nume : languageVariable == 2 ? alc.numerus : alc.numeeng}</h2>
        </div>`
});
document.querySelector('.menuc11').innerHTML = '';
bere.forEach(una => {
    document.querySelector('.menuc11').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${una.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${una.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${una.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? una.nume : languageVariable == 2 ? una.numerus : una.numeeng}</h2>
        </div>`
});
document.querySelector('.menuc12').innerHTML = '';
vin.forEach(unvin => {
    document.querySelector('.menuc12').innerHTML +=
     `<div class="box">
                    <div class="upperdeck">
                    <img src="assets/images/menu/${unvin.id}.jpg" class="imagebox">
                    <div class="pricebox">
                        <p class="quantity">${unvin.gramaj} ${languageVariable == 2 ? 'г': 'g' }</p>
                        <p class="price">${unvin.pret} MDL</p>
                    </div></div>
                    <h2 class="productName"> ${languageVariable == 1 ? unvin.nume : languageVariable == 2 ? unvin.numerus : unvin.numeeng}</h2>
        </div>`
});
}
renderMenu();
function renderHotel(){
    document.querySelector('.section2 h1').innerHTML = `${languageVariable == 1? 'Camere oferite' : languageVariable ==2 ? 'Предлагаемые номера': 'Rooms Offered'}`
    document.querySelector('.denumireaCamerei').innerHTML = `${languageVariable == 1? 'Cameră Dublă': languageVariable ==2? 'Двухместный номер' : 'Double Room'}`
    document.querySelector('.pretulCamerei').innerHTML = `${languageVariable == 1? '800 MDL / 24 Ore <br> <span>600MDL / Noapte </span>': languageVariable == 2? '800 MDL / 24 часа <br> <span>600MDL / Ночь </span>': '800 MDL / 24 Hours <br> <span>600MDL / Night </span>'}`
    document.querySelector('.denumireaCamerei2').innerHTML = `${languageVariable == 1? 'Cameră Family' : languageVariable == 2? 'Семейный номер': 'Family Room'}`
    document.querySelector('.pretulCamerei2').innerHTML = `${languageVariable == 1? '1200 MDL / 24 Ore <br><span>800 MDL / Noapte</span>' : languageVariable == 2? '1200 MDL / 24 часа <br><span>800 MDL / Ночь</span>' : '1200 MDL / 24 Hours <br><span>800 MDL / Night</span>'}`
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
document.addEventListener("DOMContentLoaded", animations());
function animations(){
    let e = document.querySelectorAll(".left-selector, .middle-selector, .box, .cameraimg, .cameratxtbox, .contacts, .contacts-title"),
        t = () => {
            let t = 1 * window.innerHeight;
            e.forEach(e => {
                let i = e.getBoundingClientRect().top;
                i < t ? e.classList.add("show") : e.classList.remove("show");
            });
        };
    window.addEventListener("scroll", t);
    t();
}