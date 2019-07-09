'use strict';

// Сортировка книг
let books = document.querySelectorAll('.books');
let elem = document.querySelectorAll('.book');

books[0].insertBefore(elem[1], elem[0]);
books[0].insertBefore(elem[2], null);
books[0].insertBefore(elem[4], elem[3]);

console.log(books);
console.log(elem);

// Замена картинки
let bodyImg = document.querySelector('body');
bodyImg.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');
console.log(bodyImg);



// Изменение название главы книги 3
let newText = document.querySelectorAll('a');
newText[2].textContent = '"Книга 3. this и Прототипы Объектов"';
console.log(newText);



// Удаление рекламы
let adv = document.querySelector('.adv');
adv.parentNode.removeChild(adv);
console.log(adv);


// Сортировка глав книг
let listUlFive = document.querySelectorAll('ul')[4];
let listLiFive = listUlFive.querySelectorAll('li');

listUlFive.insertBefore(listLiFive[9], listLiFive[2]);
listUlFive.insertBefore(listLiFive[5], listLiFive[8]);
listUlFive.insertBefore(listLiFive[2], listLiFive[6]);


// --------------------------

let listUlTwo = document.querySelectorAll('ul')[1];
let listLiTwo = listUlTwo.querySelectorAll('li');

listUlTwo.insertBefore(listLiTwo[2], listLiTwo[10]);
listUlTwo.insertBefore(listLiTwo[4], listLiTwo[9]);
listUlTwo.insertBefore(listLiTwo[5], listLiTwo[9]);
listUlTwo.insertBefore(listLiTwo[7], listLiTwo[9]);


// Добавление Главы 8
let listUlSix = document.querySelectorAll('ul')[5];


let newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

listUlSix.appendChild(newChapter);

let listLiSix = listUlSix.querySelectorAll('li');
listUlSix.insertBefore(listLiSix[10], listLiSix[9]);

console.log(listUlSix);
console.log(listLiSix);