
const phone = document.querySelector('#phone');
phone.addEventListener('keydown', function(e) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    let isPlus = false;

    if (e.key >= 0 && e.key <=9) {
        isDigit = true;
    }
    
    if (e.key == '-') {
        isDash = true;
    } 
    
    if (e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Backspace') {
        isControl = true;
    } 

    if (e.key == '+') {
        isPlus = true;
    }

    if (!isDigit && !isDash && !isControl && !isPlus) {
        e.preventDefault();
    }
});



const orderForm = document.querySelector('#order-form');
const formButton = document.querySelector("#form-button");

formButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (validateForm(orderForm)) {
        const data = {
            name: orderForm.elements.name.value,
            phone: orderForm.elements.phone.value,
            comment: orderForm.elements.comment.value,
            to: orderForm.elements.email.value
        };

        const dataJson = JSON.stringify(data);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(dataJson);

        xhr.addEventListener('load', function() {
            if (xhr.status >= 400) {
                console.log(xhr.statusText);
            } else {
                console.log(JSON.parse(xhr.responseText));
            }
        });
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateFild(form.elements.name)) {
        valid = false;
    }

    if (!validateFild(form.elements.phone)) {
        valid = false;
    }

    if (!validateFild(form.elements.email)) {
        valid = false;
    }

    if (!validateFild(form.elements.comment)) {
        valid = false;
    }

    return valid;
}

function validateFild(field) {
    let valid = true;
    if (!field.checkValidity()) {
        field.style.borderColor = 'red';
        field.style.backgroundColor = '#fcd4d4';
        valid = false;
    }
    return valid;
}

/*const customerPhone = document.querySelector('#phone');
customerPhone.addEventListener('keydown', function(e) {
    console.log(e.key);

    let isDigit = false;

    if (e.key >= 0 && e.key <= 9) {
        isDigit = true;
    }

    console.log(isDigit);
});*/

//const regexp = /Игорь\./;
//const exp = 'Привет! Меня зовут Игорь! Мне 36 лет.';

//let resExp = exp.match(regexp);
//console.log(resExp);

// const regexp = /\d\d/;
// const exp = 'Привет! Меня зовут Игорь! Мне 36 лет. Я работаю 12 лет.';

// let resExp = exp.match(regexp);
// console.log(resExp);

// const  regexp = /\D\D\D/;
// const exp = 'Привет! Меня зовут Игорь! Мне 36 лет. Я работаю 12 лет.';
// const resExp = exp.match(regexp);
// console.log(resExp);

// const regexp = /[^ЮИ]ра/;
// const exp = 'Ты Юра? Я - Ира. Ура!';
// console.log(exp.match(regexp));

//const regexp = /\d\d\.\d\d\.\d\d\d\d/;
// const regexp = /\d{2}\.\d{2}\.\d{4}/;
// const exp = 'Сегодня 27.01.2024';
// console.log(exp.match(regexp));

// const regexp  = /\d{3,}?/g;
// const str = 'У меня было 50 рублей, затем добавилось 1000000. Но мне не хватало еще 15.';
// const res = str.match(regexp);
// console.log(res);

// const regexp = /\s*,\s*/;
// const str = '0,1,  2,   3 , 4  , 5    ,6, 7,  8  ,  9';

// //const res = str.match(regexp);
// const resArr = str.split(regexp);
// console.log(resArr);

// const regexp = /\d{6}/;
// const str = '... телефон 123456. Его почта ...';
// const res = str.search(regexp);
// console.log(res);

// const regexp = /./gs;
// const str = 'а\nб';
// console.log(str.match(regexp));

// const regexp = new RegExp('.', 'g');
// const str = 'а\nб';
// console.log(str.match(regexp));

// const regexp = new RegExp('кот', 'g');
// const str = 'Кот терракотового цвета кушал котлету';
// console.log(str.match(regexp));

/*let str = '';

for (let i = 0; i < 10000000; i++) {
    str += (i === 1000 || i === 2000) ? 'b' : 'a';
}

let regexp = /b/g;
let t1 = performance.now();

let res1 = regexp.exec(str);
let res2 = regexp.exec(str);
let res3 = regexp.exec(str);

let t2 = performance.now();
console.log('Первый вариант с флагом g:', t2 - t1, res1, res2, res3);


regexp = /b/y;
t1 = performance.now();

res1 = regexp.exec(str);
res2 = regexp.exec(str);
res3 = regexp.exec(str);

t2 = performance.now();
console.log('Второй вариант с флагом y:',t2 - t1, res1, res2, res3);


regexp = /b/g;
t1 = performance.now();
regexp.lastIndex = 1000;
res1 = regexp.exec(str);
regexp.lastIndex = 2000;
res2 = regexp.exec(str);
res3 = regexp.exec(str);
t2 = performance.now();
console.log('Третий вариант с флагом g:', t2 - t1, res1, res2, res3);


regexp = /b/y;
t1 = performance.now();
regexp.lastIndex = 1000;
res1 = regexp.exec(str);
regexp.lastIndex = 2000;
res2 = regexp.exec(str);
res3 = regexp.exec(str);
t2 = performance.now();
console.log('Четвертый вариант с флагом y:', t2 - t1, res1, res2, res3);
*/

//const regexp = /\p{Sc}/gu; // юникодное свойство поддерживается только с флагом u
// const str = '$10 - это 650р';
// console.log(str.match(regexp));

/*const password = document.getElementById('password');
password.addEventListener('input', (e) => {
    const regexp = /^.{8,16}$/;
    const str = e.target.value;

    const result = regexp.test(str);
    console.log(result);

    if(result) {
        e.target.classList.remove('test-password__invalid');
        e.target.classList.add('test-password__valid');
    } else {
        e.target.classList.remove('test-password__valid');
        e.target.classList.add('test-password__invalid');
    }
});*/
/////////////////////////////////////////////////////////////
// const testForm = document.querySelector('#test-form');
// const testBtn = document.querySelector('#send-button');

// testBtn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(testForm.elements);
//     console.log(testForm.elements.name.value);

//     if (testForm.elements.auto.checked == true) {
//         console.log("Есть машина");
//     } else console.log("Машины нет!");
// });

////////////////////////////////////////////////////////////

/*const addEmployeeBtn = document.querySelector('#employee-btn'); //доступ к кнопке
const newName = document.querySelector('#employee-name'); //Доступ к инпуту, в который введут имя
const employeesList = document.querySelector('#employees'); //Доступ к списку ul, в который будем добавлять li

addEmployeeBtn.addEventListener('click', e => {
    e.preventDefault();
    const addEmployeeItem = document.createElement('li'); //Создаем li
    addEmployeeItem.classList.add('employees__item'); //Добавляем класс без точки к новому li
    addEmployeeItem.textContent = newName.value; //В новый li заносим значение(текст) из инпута

    const removeBtn = document.createElement('button'); //создали кнопку
    removeBtn.textContent = 'Удалить'; //добавили название на кнопку
    removeBtn.addEventListener('click', e => {
        employeesList.removeChild(addEmployeeItem); //удалили новый li
    });

    addEmployeeItem.appendChild(removeBtn); //поместили кнопку в li
    employeesList.appendChild(addEmployeeItem); //В ul добавляем созданный li

    newName.value = ''; //очистили поле в инпуте
});*/

/*const initialStr = 'Привет! Как дела?';
let vowels = 'аеёиоуыэюя';

const resString = stringToFilter => {
    let currentStr = '';
    for (let i = 0; i < stringToFilter.length; i++) {
        if (vowels.includes(stringToFilter[i])) {
            currentStr += stringToFilter[i];
        }
    }
    return currentStr;
}
 console.log(resString(initialStr));*/

// let worker1 = { name: 'Ivan', salary: 2000 };
// let worker2 = { name: 'Petr', salary: 1500 };
// let worker3 = { name: 'Inna', salary: 800 };
// let worker4 = { name: 'Anna', salary: 1000 };

/*const path = '/users/download/index.html';

function isHtml(somePath) {

    const regExp = /^.+\.html$/;
    
    if (somePath.match(regExp)) {
        return true;
    }
    
    return false;
}

console.log(isHtml(path));*/

/*const path = '/users/download/index.html';

const isHtml = somePath => {
    const html = '.html';

    if (somePath.slice(-5) === html) {
        return true;
    }
    return false;
};

console.log(isHtml(path));*/

// const initialArray = [3,13,74,14,66,15,22,4];

// const isEven = num => {
//     return ((num % 2 == 0) ? true : false);
// };

/*let filterArray = initialArr => {
    let currentArr = [];
    initialArr.map(function(num) {
        if (isEven(num)) {
            currentArr.push(num);
        }
    });
    return currentArr;
}

console.log(filterArray(initialArray));*/

/*let filterArray = initialArray => {
    let currentArr = [];

    initialArray.forEach(elem => {
        if (isEven(elem)) {
            currentArr.push(elem);
            //console.log(elem);
        }
    });
    return currentArr;
}
console.log(filterArray(initialArray));*/

/*let filterArray = initialArray => {
    let currentArr = [];
    let res = 0;
    for (let i in initialArray) { //индекс элемента массива, не значение
        res = initialArray[i];
        if(isEven(res)) {
            currentArr.push(res);
        }
    }
    return currentArr;
}
console.log('Четные числа: ', filterArray(initialArray));*/

/*let filterArray = initialArray => {
    let currentArr = [];
    let res = '';

    for (let num of initialArray) { //значение элемента массива, не индекс!
        if(isEven(num)) {
            currentArr.push(num);
        }
    }
    return currentArr;
}
console.log(filterArray(initialArray));*/

