//VARIAVEIS
const btnRestart = document.querySelector('#restart-btn')
const modalElement = document.querySelector('.modal')

let clickCount = 1
let firstRow
let firstColumn
let secondRow
let secondColumn

let wordString
let element

let checkedWordList = []
let winningCount = 0

//FUNCOES
function firstClick(e) {
    let stringId = e.srcElement.id
    let numberId = stringId.match(/\d+/g)
    firstRow = parseInt(numberId[0])
    firstColumn = parseInt(numberId[1])
    element = document.querySelector(`#r${firstRow}-c${firstColumn}`)
    element.classList.add('selected-cell')
    clickCount = 2
}

function secondClick(e) {
    let stringId = e.srcElement.id
    let numberId = stringId.match(/\d+/g)
    secondRow = parseInt(numberId[0])
    secondColumn = parseInt(numberId[1])
    element.classList.remove('selected-cell')
    clickCount = 1

   getWordString()
}

function getWordString() {
    let word
    if (word = horizontalCheck()) {
        if (chosedWordList.includes(word)) {
            for (let i = firstColumn; i <= secondColumn; i++) {
                const cell = document.querySelector(`#r${firstRow}-c${i}`)
                cell.classList.add('green-cell')  
            }
            let wordOnList = document.querySelector(`#word${chosedWordList.indexOf(word)}`)    
            wordOnList.classList.add('green-word')
            dealWithCount(word) 
        }
    } else if (word = verticalCheck()) {
        if (chosedWordList.includes(word)) {
            for (let i = firstRow; i <= secondRow; i++) {
                const cell = document.querySelector(`#r${i}-c${firstColumn}`)
                cell.classList.add('green-cell')
            }
            let wordOnList = document.querySelector(`#word${chosedWordList.indexOf(word)}`)    
            wordOnList.classList.add('green-word')
            dealWithCount(word) 
        }
    } else if (word = diagonalCheck()) {
        if (chosedWordList.includes(word)) {
            let cont = 0 
            for (let i = firstRow; i <= secondRow; i++) {
                const cell = document.querySelector(`#r${i}-c${firstColumn+cont}`)
                cell.classList.add('green-cell')
                cont = cont + 1
            }
            let wordOnList = document.querySelector(`#word${chosedWordList.indexOf(word)}`)    
            wordOnList.classList.add('green-word')
            dealWithCount(word)
        }
    } else {
        wrongAnimation()
    }

    if (winningCount == 12) {
        endGame()
    }
    
}

function betweenPoints() {

}

function horizontalCheck() {
    if (firstRow == secondRow) {
        wordString = ''
        if (firstColumn > secondColumn) {
            let temp = firstColumn
            firstColumn = secondColumn
            secondColumn = temp 
        }
        for (let i = firstColumn; i <= secondColumn; i++) {
            wordString = wordString + tableRepresentation[firstRow][i]
        }
        return wordString
    }
    return null
}

function verticalCheck() {
    if (firstColumn == secondColumn) {
        wordString = ''
        if (firstRow > secondRow) {
            let temp = firstRow
            firstRow = secondRow
            secondRow = temp 
        }
        for (let i = firstRow; i <= secondRow; i++) {
            wordString = wordString + tableRepresentation[i][firstColumn]
        }
        return wordString
    }
    return null
}

function diagonalCheck() {
    if ( Math.abs(firstRow - secondRow) <= 1 === Math.abs(firstColumn - secondColumn) <= 1) {
        wordString = ''
        let cont = 0
        if (firstRow > secondRow || firstColumn > secondColumn) {
            let temp = firstRow
            firstRow = secondRow
            secondRow = temp 

            temp = firstColumn
            firstColumn = secondColumn
            secondColumn = temp

        }
        for (let i = firstRow; i <= secondRow; i++) {
            wordString = wordString + tableRepresentation[i][firstColumn+cont]
            cont = cont + 1
        }
        return wordString
    } 
    
    wrongAnimation()
    return null
}

function wrongAnimation() {
    tableContainer.style.animation = 'animation 1s'
}

function negativeChange(n1, n2) {
    if (n1 > n2) {
        let temp = n1
        n1 = n2
        n2 = temp 
    }
}

function restartGame() {
    checkedWordList = []
    tableRepresentation = []
    tableSolution = []
    winningCount = 0
    tableContainer.append(createTable())
    pastSeconds = 0
    choseWord()
    horizonWordPlacement()
    attTableRepresentation()
    verticalWordPlacement()
    attTableRepresentation()
    diagonal1WordPlacement()
    attTableRepresentation()
   
    attTable()

    attWordList()
    addEventListenerCreator()
    startTimer()
}

function dealWithCount(word) {
    if (wordCheck(word) == true) {
        winningCount = winningCount + 1
        console.log(winningCount)
    }    
}

function wordCheck(word) { //função que checa se a palavra já foi selecionada ou não. Sem isso o jogador poderia selecionar varias vezes a mesma palavras e ganhar o jogo facilmente
    if (checkedWordList.includes(word)) {
        return false
    }
    checkedWordList.push(word)
    return true
}

//EVENTOS
btnRestart.addEventListener('click', () => {
    modalElement.classList.add('hidden')
    restartGame()
})



/// Criar logica que seleciona as palavras clicadas 

/// lógica com 2 clicka. No primeiro click será guardado a posição da celula clicada. Já no segundo click será usada a posição da segunda celula para entender quais letras existem entre estas duas celulas e assim salvar a string através dessas letras e prosseguir com os testes.\\