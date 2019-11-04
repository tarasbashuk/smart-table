import { regexFindCellsID } from "./regExp"

const getCellsId = inputValue => {
  const cellsArray = inputValue.match(regexFindCellsID)
  if (cellsArray[0].match(/,/)) {
    return cellsArray[0].split(",")
  } else {
    return cellsArray[0].split("+")
  }
}

const getTypeOfResult = typeOfData => {
  let numberCount = 0
  let moneyCount = 0
  let stringCount = 0

  typeOfData.forEach(type => {
    switch (type) {
      case "number":
        numberCount++
        break

      case "moneyString":
        moneyCount++
        break

      case "string":
      // case "emtyString":
        stringCount++
        break
      default:
        break
    }
  })

  if (
    (numberCount && moneyCount) ||
    (numberCount && stringCount) ||
    (numberCount && stringCount)
  )
    return "Yoy can add or get average only from one type of cells"

  if (numberCount > moneyCount && numberCount > stringCount) return "number"

  if (moneyCount > numberCount  && moneyCount > stringCount) return "moneyString"

  if (stringCount > numberCount  && stringCount  > moneyCount ) return "string"
}

export const getSum = (inputValue, tableCells) => {
  console.log("Зашли в getSUM")
  console.log("inputValue-", inputValue)
  const cellsIdArray = getCellsId(inputValue)
  console.log("cellsIdArray-", cellsIdArray)
  console.log("tableCells-", tableCells)
  const typeOfData = []
  const cellsData = cellsIdArray.map(cellId => {
    let value
    tableCells.forEach(cell => {
      if (cell.id === cellId) {
        console.log("cell.functionResult-", cell.functionResult)
        value = Number(cell.functionResult.replace(/\s|\$/g, ""))
        typeOfData.push(cell.type)
      }
    })
    return value
  })
  console.log("cellsData-", cellsData)
  console.log("typeOfData-", typeOfData)

  const typeOfResult = getTypeOfResult(typeOfData)
  console.log("typeOfResult",typeOfResult)
  const inputResult = cellsData.reduce((item, sum) => item + sum)

  return inputResult
}
