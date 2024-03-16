//VAR
const tableContainer = document.querySelector('#table-container')


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
            cell.textContent = 'a'
            
            row.append(cell)
            
            idColumn++
        }
        table.append(row)
        idRow++
        idColumn = 0
    }

    return table
}


//EVENT

tableContainer.append(createTable())