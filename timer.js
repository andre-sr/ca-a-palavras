//VARIAVEIS
const timerElement = document.querySelector('#timer')
const modalTimerElement = document.querySelector('#modal-time')
let pastSeconds = 0
let intervalId = null

//FUNCOES
function timer() {
    pastSeconds += 1
    timerElement.innerHTML = `timer: ${pastSeconds}`

}

function startTimer() {
    pastSeconds = 0
    intervalId = setInterval(timer, 1000)
    timerElement.innerHTML = `timer: ${pastSeconds}`
}

function attModal() {
    clearInterval(intervalId)
    intervalId = null
    modalElement.classList.remove('hidden')
    modalTimerElement.textContent = `${pastSeconds}`
}

function attTimerElement() {}

//EVENTOS