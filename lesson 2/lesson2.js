//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array;
array = [ 18, 158, -45, -136, true, 1258, false, 'new word', 'This is wonderful', 'abc' ]
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book= {
    title: 'Harry Poter',
    pageCount: 500,
    genre: 'fantasy',
}
let book1={
    title: 'The Queens Gambit',
    pageCount: 450,
    genre: 'fantasy',
}
let book2={
    title: 'Forest Song',
    pageCount: 200,
    genre: 'poem',
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let name_book={
    title: 'Alisa in Wonderland',
    pageCount: 230,
    genre: 'fantasy',
    author: {
        name: 'Lewis',
        age: 50,
    }
}
let name_book1={
    title: 'Kobzar',
    pageCount: 500,
    genre:'lyrics',
    author:{
        name: 'Taras',
    }
}
let name_book2={
    title: 'Black raven',
    pageCount: 400,
    genre: 'thriller',
    author:{
        name: 'Vasyl',
        age: 72,
    }
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user =[
    {
        name: 'Heorhiy',
        username: 'Heo',
        password: 'qwerty20',
    },
    {
        name: 'Andrii',
        username: 'And',
        password: 'asdf12',
    },
    {
        name: 'Sophia',
        username: 'Sop',
        password: 'zxc45',
    },
    {
        name:'Nastia',
        username: 'Nast',
        password: 'bnm78',
    },
    {
        name: ' Viktroria',
        username: ' Vikyy',
        password: 'sdf78',
    },
    {
        name:'Solomia',
        username: 'Solom',
        password: 'lkj65',
    },
    {
        name:'Wadum',
        username:'Wad',
        password: "fgt123",
    },
    {
        name:'Sergiy',
        username: 'Serg',
        password: 'swer1445',
    },
    {
        name: 'Danulo',
        username: 'Danya',
        password: '23gss'
    },
    {
        name:'Iruna',
        username: 'Ira',
        password: '154kli',
    },
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
 let x = 158;
if (x !== 0) {
    console.log('true');
} else{
    console.log('false');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 30;
if (time >= 0 && time < 15){
    console.log('first part');
} else if ( time >= 15 && time < 30){
    console.log('second part');
} else if (time >= 30 && time < 45){
    console.log('third part');
} else if(time >= 45 && time <= 59){
    console.log('fours part');
} else{
    console.log('error');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 20 ;
if (day >= 1 && day <= 10){
    console.log('first part');
} else if ( day > 10 && day <= 20){
    console.log('second part');
} else if (day > 20 && day <= 31){
    console.log('third part');
} else{
    console.log('The end')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day_numb=  parseInt(prompt('What day is it today?'))
switch (day_numb){
    case 1:
        console.log('go shopping');
        break;
    case 2:
        console.log('go to the walking with family');
        break;
    case 3:
        console.log('sleeping');
        break
    case 4:
        console.log('watching film in the cinema');
        break
    case 5:
        console.log('working');
        break
    case 6:
        console.log('go to the sister');
        break
    case 7:
        console.log('sleeping');
        break
    default:
        console.log('?????')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let number_1= 15;
let number_2= 65;
if (number_1 < number_2){
    console.log(number_2);
} else if(number_1 > number_2){
    console.log(number_1);
} else {
    console.log('equal');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = null;
let x2 = "";
let x3 = 0;
let x4 = false;
let x5;
let x6 = 5;
x1 = x1 || "default";
x2 = x2 || "default";
x3 = x3 || "default";
x4 = x4 || "default";
x5 = x5 || "default";
x6 = x6 || "default";
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if ( coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super');
}