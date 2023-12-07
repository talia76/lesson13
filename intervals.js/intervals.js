//setInterval - Это метод, позволяющий вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

const ourInterval = setInterval(() => {
    console.log("Буду появляться каждые 5 секунд");
}, 5000)


// в консоли будет непрерывно появляться фраза "Буду появляться каждые 5 секунд" до тех пор, 
// пока мы не остановим выполнение функции setInterval

//clearInterval - Это метод, позволяющий прекратить выполнение функции setInterval.

setTimeout (() => {
    clearInterval(ourInterval)
    clearInterval(interval);
}, 5000);

// переменная ourInterval берется из предыдущего примера

const tick = setInterval(()=>{
    console.log("tick");
},5000); // будет выполняться каждые 5 секунд

const interval = setInterval(()=>{
    console.log("interval");
},1000)

setTimeout(()=>{
    clearInterval(tick);
    clearInterval(interval);
},5000)