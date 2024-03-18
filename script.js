//VAR
const tableContainer = document.querySelector('#table-container')
const btnStart = document.querySelector('#start')


let tableRepresentation = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
const wordList = ["banana", "carro", "cachorro", "computador", "lua", "bicicleta", "sol", "gato", "livro", "montanha"]
const chosedWordList = []

//FUNCTION
function createTable() {
    let idRow = 0
    let idColumn = 0
    let table = document.createElement('table')
    
    for (let i = 0; i < 15; i++) {
        const row = document.createElement('tr')


        for (let i = 0; i < 15; i++) {
            const cell = document.createElement('td')
            cell.id = `r${idRow}-c${idColumn}`
            tableRepresentation[idRow][idColumn] =  `${getRandomLetter()}`
            cell.textContent = `${tableRepresentation[idRow][idColumn]}`
            row.append(cell)
            
            idColumn++
        }
        table.append(row)
        idRow++
        idColumn = 0
    }

    return table
}

function attTable() {
    let idRow = 0
    let idColumn = 0

    for (let i = 0; i < 15; i++) {
        let idColumn = 0
        for (let i = 0; i < 15; i++) {
            //debugger
            let cellElement = document.querySelector(`#r${idRow}-c${idColumn}`)
            let tableValue = tableRepresentation[idRow][idColumn]

            if (cellElement.textContent != tableValue) {
                cellElement.style.background = 'green'
                cellElement.textContent = tableValue
            }
            idColumn++       
        }
        idRow++
    }
}

function getRandomLetter() {
    randomNumber = Math.floor(Math.random() * 26)
    randomLetter = String.fromCharCode(97 + randomNumber)

    return randomLetter
}


// Criar a logica que colocara as palavras no table. Começar pelas palavras que ficaram na horizontal, dai partir para as palavras na diagonal. Depois criar a lógica que permitira que essas palavras se cruzem. 

function choseWord() {
    for (let i = 0; i < 5; i++) {
        let chosedWord  = Math.floor(Math.random() * wordList.length)
        chosedWordList.push(wordList[chosedWord])
    }
}

function horizonWordPlacement() {
    for (let i = 0; i < 5; i++) {
        var test = false
        const chosedWordN = Math.floor(Math.random() * chosedWordList.length)
        const chosedWordString = chosedWordList[chosedWordN]

        while (test === false) {
            let rowN = Math.floor(Math.random() * tableRepresentation.length)
            let columnN = Math.floor(Math.random() * tableRepresentation[rowN].length)
            //let columnN = Math.floor(Math.random() * tableRepresentation[1].length)

            if (tableRepresentation.length - columnN >= chosedWordString.length) {

                console.log('FLAMENGO!')
                test = true

                if (test === true) {
                    for (let i = 0; i < chosedWordString.length; i++) {
                        tableRepresentation[rowN][columnN+i] = chosedWordString[i]
                    }
                }
            }

           

        }
        
    }
}






//EVENT
btnStart.addEventListener('click', () => {
    
})

tableContainer.append(createTable())
choseWord()
horizonWordPlacement()