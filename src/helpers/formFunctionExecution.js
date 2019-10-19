import { regexFindCellsID } from "./regExp"

const getCellsArray = inputValue => {
  const cellsArray = inputValue.match(regexFindCellsID)
  if (cellsArray[0].match(/,/)) {
    return cellsArray[0].split(",")
  } else {
    return cellsArray[0].split("+")
  }
  
}

export const getSum = (inputValue, tableCells) => {
  console.log("Зашли в getSUM")
  console.log("inputValue-", inputValue)
  const cellsArray = getCellsArray(inputValue)
  console.log("cellsArray-", cellsArray)
  console.log("tableCells-", tableCells)
  const cellsData = cellsArray.map(cellID => {
    let value
    tableCells.forEach(cell => {
      if (cell.id === cellID) {
        value = Number(cell.functionResult.replace(/\s/g, ""))
      }
    })
    return value
  })
  console.log("cellsData-", cellsData)
  const inputResult = cellsData.reduce((item, sum) => item + sum)

  return inputResult
}


