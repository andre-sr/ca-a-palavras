//VAR
const tableContainer = document.querySelector('#table-container')
const btnStart = document.querySelector('#start')


let tableRepresentation = [
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"],
    ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$"]
  ];

let tableSolution = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const wordList = ["banana", "carro", "cachorro", "computador", "lua", "bicicleta", "sol", "gato", "livro", "montanha", "chocolate", "elefante", "avião", "jardim", "telefone", "piano", "sorvete", "praia", "foguete", "eletricidade"];

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
            //tableRepresentation[idRow][idColumn] =  `${getRandomLetter()}`
            //cell.textContent = `${tableRepresentation[idRow][idColumn]}`
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
        for (let i = 0; i < 15; i++) {
            //debugger
            let cellElement = document.querySelector(`#r${idRow}-c${idColumn}`)
            let tableValue = tableRepresentation[idRow][idColumn]

            if (tableSolution[idRow][idColumn] === tableValue) {
                cellElement.style.background = 'green'
            }
            cellElement.textContent = tableValue 
            idColumn++       
        }
        idRow++
        idColumn = 0
    }
}

//tableRepresentation[idRow][idColumn] =  `${getRandomLetter()}`
            //cell.textContent = `${tableRepresentation[idRow][idColumn]}`

function attTableRepresentation() {
    let idRow = 0
    let idColumn = 0

    for (let i = 0; i < 15; i++) {
        for (let i = 0; i < 15; i++) {
            //debugger
            let tableSolutionValue = tableSolution[idRow][idColumn]
           // let tableRepresentationValue = tableRepresentation[idRow][idColumn]
            let cellElement = document.querySelector(`#r${idRow}-c${idColumn}`)

            if (tableSolutionValue !== 0) {
                
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


// Criar a logica que colocara as palavras no table. ------------------------
//Começar pelas palavras que ficaram na horizontal, -------------------------
// vertical -----------------------------------------------------------------
// dai partir para as palavras na diagonal. 
//Depois criar a lógica que permitira que essas palavras se cruzem. ---------

function choseWord() {
    //debugger
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
        //const chosedWordN = Math.floor(Math.random() * chosedWordList.length)
        const chosedWordString = chosedWordList[i]

        while (test === false) {
            let rowN = Math.floor(Math.random() * tableRepresentation.length)
            let columnN = Math.floor(Math.random() * tableRepresentation[rowN].length)
            //let columnN = Math.floor(Math.random() * tableRepresentation[1].length)

            if (tableRepresentation.length - columnN >= chosedWordString.length) {
                test = true
                for (let i = 0; i < chosedWordString.length + 1; i++) {
                    if (tableSolution[rowN][columnN+i] !== 0) {
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
    //debugger
    for (let i = 4; i < 8; i++) {
        var test = false
        const chosedWordString = chosedWordList[i]

        while (test === false) {
            let rowN = Math.floor(Math.random() * tableRepresentation.length)
            let columnN = Math.floor(Math.random() * tableRepresentation[rowN].length)
        
            if (tableRepresentation.length - rowN >= chosedWordString.length) {
                test = true
                for (let i = 0; i < chosedWordString.length; i++) {
                    if (tableSolution[rowN+i][columnN] !== 0) {
                        test = false
                    }
                    if (tableSolution[rowN+i][columnN] == chosedWordString[i]) {
                        test = true
                    }
                }
                
                if (test === true) {
                    for (let i = 0; i < chosedWordString.length; i++) {
                        tableSolution[rowN+i][columnN] = chosedWordString[i]
                    }
                }
            }
        }  
    }
}


//EVENT
btnStart.addEventListener('click', () => {
    choseWord()
    horizonWordPlacement()
    attTableRepresentation()
    verticalWordPlacement()
    attTableRepresentation()
    attTable()
})

tableContainer.append(createTable())
//choseWord()
//