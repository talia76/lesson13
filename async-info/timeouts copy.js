
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

// 2 Variant
function clapHands() {
    setTimeout(() => {
        console.log("Clap!");
    }, 2000)
    setTimeout(() => {
        console.log("Bravo!");
    }, 7000)
};
clapHands();