//VARIAVEIS
const timerElement = document.querySelector('#timer')
let pastSeconds = 0


//FUNCOES
function timer() {
    pastSeconds += 1
    console.log(pastSeconds)
    timerElement.innerHTML = `timer: ${pastSeconds}`

}

function startTimer() {
    pastSeconds = 0
    setInterval(timer, 1000)
}

function attTimerElement() {}

//EVENTOS