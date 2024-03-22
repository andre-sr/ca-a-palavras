//VARIAVEIS

let clickCount = 1
let firstRow
let firstColumn
let secondRow
let secondColumn

let wordString

//FUNCOES
function firstClick(e) {
    let stringId = e.srcElement.id
    let numberId = stringId.match(/\d+/g)
    firstRow = parseInt(numberId[0])
    firstColumn = parseInt(numberId[1])
    //console.log(firstRow, firstColumn)
    //console.log(clickCount)
    clickCount = 2
}

function secondClick(e) {
    let stringId = e.srcElement.id
    let numberId = stringId.match(/\d+/g)
    secondRow = parseInt(numberId[0])
    secondColumn = parseInt(numberId[1])
    //console.log(secondRow, secondColumn)
    //console.log(clickCount)
    clickCount = 1

   getWordString()
}

function getWordString() {
    horizontalCheck()
    verticalCheck()
    diagonalCheck()
}

function betweenPoints() {

}

function horizontalCheck() {
    if (firstRow == secondRow) {
        console.log('A string está na horizontal')
        wordString = ''
        if (firstColumn > secondColumn) {
            let temp = firstColumn
            firstColumn = secondColumn
            secondColumn = temp 
        }
        for (let i = firstColumn; i <= secondColumn; i++) {
            wordString = wordString + tableRepresentation[firstRow][i]
        }
        console.log(wordString)
        
    }
}

function verticalCheck() {
    if (firstColumn == secondColumn) {
        console.log('A string está na vertical')
        wordString = ''
        if (firstRow > secondRow) {
            let temp = firstRow
            firstRow = secondRow
            secondRow = temp 
        }
        for (let i = firstRow; i <= secondRow; i++) {
            wordString = wordString + tableRepresentation[i][firstColumn]
        }
        console.log(wordString)
    }
}

function diagonalCheck() {
    if ( Math.abs(firstRow - secondRow) <= 1 === Math.abs(firstColumn - secondColumn) <= 1) {
        console.log('os valores são adjacentes')
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
        console.log(wordString)
    } else {
        console.log('os valores não são adjacentes')
    }
}

function negativeChange(n1, n2) {
    if (n1 > n2) {
        let temp = n1
        n1 = n2
        n2 = temp 
    }
}

//EVENTOS










/// Criar logica que seleciona as palavras clicadas 

/// lógica com 2 clicka. No primeiro click será guardado a posição da celula clicada. Já no segundo click será usada a posição da segunda celula para entender quais letras existem entre estas duas celulas e assim salvar a string através dessas letras e prosseguir com os testes.