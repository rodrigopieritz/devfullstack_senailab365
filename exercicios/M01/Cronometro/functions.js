let startTime = 10
let recurence
let counter = document.getElementById("counter")

function countdown() {
    if (startTime == 0) {
        counter.innerHTML = "Fim!"
        clearTimeout(recurence)
    }
    else {
         counter.innerText = startTime--
    }
}
function start() {
    startTime = 10
    recurence = setInterval(countdown, 1000)
}