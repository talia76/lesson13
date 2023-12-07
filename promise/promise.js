//Promise - Это объект, представляющий результат успешного или неудачного завершения асинхронной операции.

/* Имеет 3 состояния:
pending /ожидание
fulfilled /выполнено
rejected /отклонено
Промис создается при помощи конструктора new Promise. 
А сам new Promise принимает в себя какую-то функцию, аргументами которой являются:
resolve - в случае исполнения промиса
rejected - в случает невыполнения промиса */

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(5)
    }, 3000)
});

// Если хотим обработать результат промиса, используем .then

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
    resolve(5)
    }, 3000)
    });
    
    promise.then((value) => {
        console.log(value);
    })
//Если хотим отловить ошибку, используем .catch

let promice2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject (new Error("Ошибкааааа!!!!!"))
    }, 4000)
})
promice2.catch((err) => console.log(err))


function getSix (){
    setTimeout(()=>{
    return 6
    },4000)
}
let x = getSix();
console.log(x)

function getSeven(){
return new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(6)
    },4000)
})
}
const promise3 = getSeven();
console.log(promise3)

promise4.then((data)=>{
console.log(data)
})
// с помощью then мы можем получить данные из промиса(обработать)

function getSevenRej(){
return new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(new Error("Ошибка сервера"));
    },4000)
})
}

const promis5 = getSevenRej();
promise5.then((data)=>{
console.log(data); // значения попадают в  then
// с данными мы можем работать только  здесь
})
.catch((e)=>{
console.log(e)
})