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
  // let emtyStringCount = 0

  typeOfData.forEach(type => {
    switch (type) {
      case "number":
        numberCount++
        break

      case "moneyString":
        moneyCount++
        break

      case "string":
        stringCount++
        break

      // case "emptyString":
      //   emtyStringCount++
      //   break

      default:
        break
    }
  })

  if (
    (numberCount && moneyCount) ||
    (numberCount && stringCount) ||
    (numberCount && stringCount)
  )
    return "different data types"

  if (numberCount > moneyCount && numberCount > stringCount) return "number"

  if (moneyCount > numberCount  && moneyCount > stringCount) return "moneyString"

  if (stringCount > numberCount  && stringCount  > moneyCount ) return "string"
 
  // if (emtyStringCount && !stringCount  && !moneyCount &&!numberCount) return "emptyString"
}

export const getSum = (inputValue, tableCells) => {
  console.log("Зашли в getSUM")
  console.log("inputValue-", inputValue)
  const cellsIdArray = getCellsId(inputValue)

  const typeOfData = []
  const cellsData = cellsIdArray.map(cellId => {

    let value
    tableCells.forEach(cell => {
      if (cell.id === cellId) {
        value = Number(cell.functionResult.replace(/\s|\$/g, ""))
        typeOfData.push(cell.type)
      }
    })
    if (!value) return 0
    return value
  })

  const resultType = getTypeOfResult(typeOfData)
  console.log("TCL: getSum -> resultType", resultType)

  const result = cellsData.reduce((item, sum) => item + sum)

  return {
    result,
    resultType
  }
}
