import React from 'react'
import TableCell from '../components/TableCell'

const makeTable = (rows) => {
        const firstChar = 65 
        const letters = Array.from({length: rows}, (_, i) => String.fromCharCode(firstChar + i))
        letters.unshift('')
        const row = Array.from({length: rows}, (_, i) => i)
        const cellsGrid = letters.map(char => <TableCell key={char} data = {char} />)
        
        const table = []
        table.push(<tr  key = {"row"} >{cellsGrid}</tr>)
        for (let index = 1; index <= rows; index++) {
            const secRow = row.map((_, i) => <TableCell key={letters[i+1]+index} data = {letters[i+1]+index} />)
            const newRow = [...secRow]
            newRow.unshift(<TableCell key = {index} data = {index} />)
            table.push(<tr key = {"row" + index}>{newRow}</tr>)
        }
        return table
    }

    export default makeTable