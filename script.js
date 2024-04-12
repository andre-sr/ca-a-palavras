//VAR
const tableContainer = document.querySelector('#table-container')
const btnStart = document.querySelector('#start')
const ulElement = document.querySelector('.word-list')

let tableSizeRow = 18;
let tableSizeColumn = 18;
let tableRepresentation = [];
let tableSolution = [];

const wordList = ["banana", "carro", "cachorro", "computador", "lua", "bicicleta", "sol", "gato", "livro", "montanha", "chocolate", "elefante", "avião", "jardim", "telefone", "piano", "sorvete", "praia", "foguete", "eletricidade", "dinossauro", "navio", "chá", "sapato", "cadeira", "escola", "planeta", "microfone", "borboleta", "aranha", "macaco", "tigre", "leão", "bola", "uva", "morango", "pera", "abacaxi", "laranja", "limão", "pêssego", "kiwi", "melancia", "melão", "goiaba", "maçã", "cenoura", "beterraba", "alface"]

let chosedWordList = []

//FUNCTIONS

function createTable() {
    tableContainer.innerHTML = ''
    
    let idRow = 0
    let idColumn = 0
    let table = document.createElement('table')
    
    for (let i = 0; i < tableSizeRow; i++) {
        let rowRepresenntation = []
        let rowSolution = []

        const row = document.createElement('tr')
        for (let i = 0; i < tableSizeColumn; i++) {
            rowRepresenntation.push('$')
            rowSolution.push('0')

            const cell = document.createElement('td')
            cell.id = `r${idRow}-c${idColumn}`
            row.append(cell)
            
            idColumn++
        }
        tableRepresentation.push(rowRepresenntation)
        tableSolution.push(rowSolution)
        table.append(row)
        idRow++
        idColumn = 0
    }
    return table
}

function attTable() {
    let idRow = 0
    let idColumn = 0

    for (let i = 0; i < tableSizeRow; i++) {
        for (let i = 0; i < tableSizeColumn; i++) {
            //debugger
            let cellElement = document.querySelector(`#r${idRow}-c${idColumn}`)
            let tableValue = tableRepresentation[idRow][idColumn]

            if (tableSolution[idRow][idColumn] === tableValue) { // if usado para debbug (deixa todas as palavras destacadas)
                //cellElement.style.background = 'blue'
            }
            cellElement.textContent = tableValue 
            idColumn++       
        }
        idRow++
        idColumn = 0
    }
}


function attTableRepresentation() {
    let idRow = 0
    let idColumn = 0

    for (let i = 0; i < tableSizeRow; i++) {
        for (let i = 0; i < tableSizeColumn; i++) {
            //debugger
            let tableSolutionValue = tableSolution[idRow][idColumn]
            let cellElement = document.querySelector(`#r${idRow}-c${idColumn}`)

            if (tableSolutionValue !== '0') {
                //cellElement.style.background = 'green'
                tableRepresentation[idRow][idColumn] = tableSolutionValue
            } else {
                tableRepresentation[idRow][idColumn] =  `${getRandomLetter()}`
                cellElement.textContent = `${tableRepresentation[idRow][idColumn]}`
            }
            idColumn++       
        }
        idRow++
        idColumn = 0
    }
}

function getRandomLetter() {
    randomNumber = Math.floor(Math.random() * 26)
    randomLetter = String.fromCharCode(97 + randomNumber)

    return randomLetter
}

function choseWord() {
    //debugger
    chosedWordList = []
    for (let i = 0; i < 12; i++) {
        let chosedWordN = Math.floor(Math.random() * wordList.length)
        let chosedWord = wordList[chosedWordN]
        
        while (chosedWordList.includes(chosedWord)){
            chosedWordN = Math.floor(Math.random() * wordList.length)
            chosedWord = wordList[chosedWordN]
        }    
        
        chosedWordList.push(chosedWord)
    }
}

function horizonWordPlacement() {
    for (let i = 0; i < 4; i++) {
        var test = false
        const chosedWordString = chosedWordList[i]

        while (test === false) {
            let rowN = Math.floor(Math.random() * tableRepresentation.length)
            let columnN = Math.floor(Math.random() * tableRepresentation[rowN].length)

            if (tableRepresentation.length - columnN >= chosedWordString.length) {
                test = true
                for (let i = 0; i < chosedWordString.length + 1; i++) {
                    if (tableSolution[rowN][columnN+i] !== '0') {
                        test = false
                    }
                }

                if (test === true) {
                    for (let i = 0; i < chosedWordString.length; i++) {
                        tableSolution[rowN][columnN+i] = chosedWordString[i]
                    }
                }
            }
        }  
    }
}

function verticalWordPlacement() {
    for (let i = 4; i < 8; i++) {
        var test = false
        const chosedWordString = chosedWordList[i]
        
        while (test === false) {
            let rowN = Math.floor(Math.random() * tableRepresentation.length)
            let columnN = Math.floor(Math.random() * tableRepresentation[rowN].length)
        
            if (tableRepresentation.length - rowN >= chosedWordString.length) {
                test = true
                let trueFalse = true
                for (let i = 0; i < chosedWordString.length; i++) {
                    if (tableSolution[rowN+i][columnN] !== '0') {
                        test = false
                    }
                    if (tableSolution[rowN+i][columnN] == chosedWordString[i]) {
                        test = true
                    }
                    if (test === false) {
                        trueFalse = false
                    }
                    test = trueFalse
                }
                
                
                if (test === true) {
                    for (let i = 0; i < chosedWordString.length; i++) {
                        tableSolution[rowN+i][columnN] = chosedWordString[i]
                    }
                }
                console.log('fudeu')
            }
        }  
    }
}

function diagonal1WordPlacement () {
    for (let x = 8; x < 12; x++) {
        var test = false
        const chosedWordString = chosedWordList[x]

        while (test === false) {
            let rowN = Math.floor(Math.random() * tableRepresentation.length)
            let columnN = Math.floor(Math.random() * tableRepresentation[rowN].length)
            let diceRolls = 0
            if (tableRepresentation.length - rowN >= chosedWordString.length) {
                test = true
                let trueFalse = true
                for (let i = 0; i < chosedWordString.length; i++) {
                    
                    if (tableSolution[rowN+i][columnN+i] !== '0') {
                        test = false
                    } else if (tableSolution[rowN+i][columnN+i] !== chosedWordString[i]) {
                        //console.log(`Na celula row${rowN+i}, column${columnN+i} os dados foram colocados de forma errada.`)
                    } 

                    if (tableRepresentation[rowN+i][columnN+i] === chosedWordString[i]) {
                        test = true
                        
                    }   
                    if (test === false) {
                        trueFalse = false
                    }
                    test = trueFalse
                    
                }
                
                if (test === true && trueFalse === true) {
                    for (let i = 0; i < chosedWordString.length; i++) {
                        tableSolution[rowN+i][columnN+i] = chosedWordString[i]
                    }
                }
                diceRolls = diceRolls + 1
                if (diceRolls >= 50) {
                    restartGame()
                }
            }
        }  
    }
}

function diagonal2WordPlacement () {
    for (let i = 10; i < 12; i++) {
        var test = false
        const chosedWordString = chosedWordList[i]

        while (test === false) {
            let rowN = Math.floor(Math.random() * tableRepresentation.length)
            let columnN = Math.floor(Math.random() * tableRepresentation[rowN].length)
        
            if (tableRepresentation.length - rowN >= chosedWordString.length) {
                test = true
                for (let i = 0; i < chosedWordString.length; i++) {
                    if (tableSolution[rowN+i][columnN+i] !== '0') {
                        test = false
                    }
                    if (tableSolution[rowN+i][columnN+i] == chosedWordString[i]) {
                        test = true
                    }
                }
                
                if (test === true) {
                    for (let i = 0; i < chosedWordString.length; i++) {
                        tableSolution[rowN+i][columnN+i] = chosedWordString[i]
                    }
                }
            }
        }  
    }
}

function addEventListenerCreator() {
    let idRow = 0
    let idColumn = 0
    
    for (let i = 0; i < tableSizeRow; i++) {
        for (let i = 0; i < tableSizeColumn; i++) {
            const cell  = document.querySelector(`#r${idRow}-c${idColumn}`)
            cell.addEventListener('click', (e) => {
                if (clickCount == 1) {
                    firstClick(e)      
                } else {
                    secondClick(e)                 
                }
            })    
            idColumn++
        }
        idRow++
        idColumn = 0
    }
}

function attWordList() {
    ulElement.innerHTML = ''
    for (let i = 0; i < chosedWordList.length; i++) {
        li = document.createElement('li')
        li.textContent = chosedWordList[i]
        li.classList.add('word')
        li.id = `word${i}`

        ulElement.append(li)
    }
}

//EVENT
btnStart.addEventListener('click', () => {
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
})

tableContainer.append(createTable())