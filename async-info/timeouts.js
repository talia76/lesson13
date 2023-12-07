// setTimeout - Это метод, позволяющий вызвать функцию один раз через определённый промежуток времени.

console.log("Hello, world!");

setTimeout(() => {
    console.log("Hey, timeout!");
}, 5000)   // в консоли получим результат "Hey, timeout!" спустя 5 секунд

console.log("Bye, world!");

function getSix() {
    setTimeout(() => {
        return 6
    }, 4000)
}
let x = getSix()
console.log(x);

function printClap() {
    console.log("Clap!");
}
function printBravo() {
    console.log("Bravo!");
}
function clapHands() {
    setTimeout(printClap, 2000)
    setTimeout(printBravo, 7000)
}
clapHands();