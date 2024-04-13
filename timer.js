//VARIAVEIS
const timerElement = document.querySelector('#timer')
const modalTimerElement = document.querySelector('#modal-time')
let pastSeconds = 0
let intervalId = null

//FUNCOES
function timer() {
    pastSeconds += 1
    attTimer()
}

function startTimer() {
    pastSeconds = 0
    intervalId = setInterval(timer, 1000)
    attTimer()
}

function attTimer() {
    const time = new Date (pastSeconds*1000)
    const formatedTime = time.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
    timerElement.innerHTML = `timer: ${formatedTime}`
}

function attModal() {
    clearInterval(intervalId)
    intervalId = null
    modalElement.classList.remove('hidden')
    modalTimerElement.textContent = `${pastSeconds}`
}

//Criar as lógicas que lidam com o local storage. Permitindo que os tempos dos jogos realizados fiquem guardados no navegador

//EVENTOS