//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i <= 10; i++){
    document.write(`<div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>`)
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i =0; i < 10;i++){
    document.write(`<div>Et tortor consequat id porta nibh.${i}</div>`);
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let a = 0;
while(a < 20 ){
    document.write(`<div><h1>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.</h1></div>`);
    a++;
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let b = 0;
while( b < 20){
    document.write(`<div><h1>Felis eget velit aliquet sagittis id consectetur purus.${b}</h1></div>`);
    b++;
}
//- Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону.
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//Масив:
let listOfItems =['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for ( let i = 0; i < listOfItems.length; i ++) {
    document.write(`<li> ${listOfItems[i]}</li>`);
}

document.write(`</ul>`);

//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону.
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту.

let product= [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < product.length ; i++) {
    document.write(`<div class = "product-card">`);
    document.write(`<div class="cards">`)
    document.write(`<h3 class ="product-title">${product[i].title}. Price - ${product[i].price}</h3>`);
    document.write(`<img src="${product[i].image}" alt="" class="product-image">`);
    document.write(`</div>`);
    document.write(`</div>`);
}

//є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//за допомоги циклу вивести:
    //- користувачів зі статусом true
//- користувачів зі статусом false
//- користувачів які старші за 30 років
for (let i = 0; i < users.length; i++){
    if (users[i].status === true){
        console.log(users[i])
    }
}
for (let i = 0; i < users.length; i++){
    if ( users[i].status === false){
        console.log(users[i])
    }
}
for (let i = 0; i < users.length; i++){
    if (users[i].age > 30){
        console.log(users[i])
    }
}
