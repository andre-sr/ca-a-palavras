//VARIAVEIS

let clickCount = 1
let firstRow
let firstColumn
let secondRow
let secondColumn

//FUNCOES
function firstClick(e) {
    let stringId = e.srcElement.id
    let numberId = stringId.match(/\d+/g)
    firstRow = parseInt(numberId[0])
    firstColumn = parseInt(numberId[1])
    console.log(firstRow, firstColumn)
    //console.log(clickCount)
    clickCount = 2
}

function secondClick(e) {
    let stringId = e.srcElement.id
    let numberId = stringId.match(/\d+/g)
    secondRow = parseInt(numberId[0])
    secondColumn = parseInt(numberId[1])
    console.log(secondRow, secondColumn)
    //console.log(clickCount)
    clickCount = 1

   getWordString()
}

function getWordString() {
    
    
}

function betweenPoints() {

}

function horizontalCheck() {
    
}

function adjacent() {
    if ( Math.abs(firstRow - secondRow) <= 1 && Math.abs(firstColumn - secondColumn) <= 1) {
        console.log('os valores são adjacentes')
        //return true
    } else {
        console.log('os valores não são adjacentes')
    }

    //return false
}

//EVENTOS










/// Criar logica que seleciona as palavras clicadas 

/// lógica com 2 clicka. No primeiro click será guardado a posição da celula clicada. Já no segundo click será usada a posição da segunda celula para entender quais letras existem entre estas duas celulas e assim salvar a string através dessas letras e prosseguir com os testes.