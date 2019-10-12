import React from "react"
import TableCell from "../components/TableCell"

const makeTable = rows => {
  const firstChar = 65
  const table = []
  const letters = Array.from({ length: rows }, (_, i) =>
    String.fromCharCode(firstChar + i)
  )
  letters.unshift("")
  const row = Array.from({ length: rows }, (_, i) => i)
  const charsRow = letters.map(char => <th key={ char }>{ char }</th> )

  table.push(<tr key={"row"}>{charsRow}</tr>)
  
  for (let index = 1; index <= rows; index++) {
    const tableRow = row.map((_, i) => (
      <TableCell key={letters[i + 1] + index} id={letters[i + 1] + index} />
    ))
    tableRow.unshift(<th key = { index }>{ index }</th>)
    table.push(<tr key={ "row" + index }>{ tableRow }</tr>)
  }
  return table
}

export default makeTable
