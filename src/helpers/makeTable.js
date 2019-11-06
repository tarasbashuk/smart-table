import React from 'react'
import TableCell from '../components/TableCell'

const makeTable = rows => {

  // Char A code 
    const firstChar = 65
    const table = []

  // Create alphabetic sequence of chars for top row in a table

    const letters = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(firstChar + i)
    )
  // Insert corner cell

    letters.unshift('')
  
  // Create regular rows
  
    const row = Array.from({ length: 26 }, (_, i) => i)
    const charsRow = letters.map(char => <th key={char}>{char}</th>)

    table.push(<tr key={'row'}>{charsRow}</tr>)

    for (let index = 1; index <= rows; index++) {
        const tableRow = row.map((_, i) => (
            <TableCell
                key={letters[i + 1] + index}
                id={letters[i + 1] + index}
            />
        ))
        tableRow.unshift(<th key={index}>{index}</th>)
        table.push(<tr key={'row' + index}>{tableRow}</tr>)
    }
    return table
}

export default makeTable
