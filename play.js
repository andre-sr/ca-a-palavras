//VARIAVEIS

let clickCount = 1
let firstClickPosition
let secondClickPosition

//FUNCOES
function firstClick(e) {
    firstClickPosition = e.srcElement.id
    console.log(firstClickPosition)
    console.log(clickCount)
    clickCount = 2
}

function secondClick(e) {
    secondClickPosition = e.srcElement.id
    console.log(secondClickPosition)
    console.log(clickCount)
    clickCount = 1

    getWordString()
}

function getWordString() {
    
}



//EVENTOS










/// Criar logica que seleciona as palavras clicadas 

/// lógica com 2 clicka. No primeiro click será guardado a posição da celula clicada. Já no segundo click será usada a posição da segunda celula para entender quais letras existem entre estas duas celulas e assim salvar a string através dessas letras e prosseguir com os testes.