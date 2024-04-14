//VARIAVEIS
const timerElement = document.querySelector('#timer')
const modalTimerElement = document.querySelector('#modal-time')
const recordListElement = document.querySelector('#record-list-element')

let pastSeconds = 0
let intervalId = null

const recordList = JSON.parse(localStorage.getItem('recordList')) || []

//FUNCOES
function timer() {
    pastSeconds += 1
    timerElement.innerHTML = ` ${attTimer()}`
}

function startTimer() {
    pastSeconds = 0
    intervalId = setInterval(timer, 1000)
    timerElement.innerHTML = ` ${attTimer()}`
}

function attTimer() {
    const time = new Date (pastSeconds*1000)
    const formatedTime = time.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
    timerElement.innerHTML = ` ${formatedTime}`
    return formatedTime
}

function endGame() {
    clearInterval(intervalId)
    intervalId = null
    modalElement.classList.remove('hidden')
    createRecord(pastSeconds, attTimer())
    
    modalTimerElement.textContent = `${attTimer()}`
}

//Criar as lógicas que lidam com o local storage. Permitindo que os tempos dos jogos realizados fiquem guardados no navegador

function createRecord(pastSeconds, formatedTime) {
    const record = {
        formatedRec: formatedTime,
        unformatedRec: pastSeconds
    }
    recordList.push(record)
    recordList.sort((a, b) => a.unformatedRec - b.unformatedRec)
    recordListCreator()  
    toLocalStorage()  
}

function recordListCreator() {
    recordListElement.innerHTML = ''
    for (let i = 0; i < recordList.length; i++) {
        let element = document.createElement('li')
        element.textContent = recordList[i].formatedRec
        recordListElement.append(element)        
    }
   
    
}

function toLocalStorage() {
    localStorage.setItem('recordList', JSON.stringify(recordList))
}

recordListCreator()
//EVENTOS