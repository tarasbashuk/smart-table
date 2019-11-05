import { regexFindCellsID } from './regExp'

const getCellsId = inputValue => {
    const cellsArray = inputValue.match(regexFindCellsID)
    if (cellsArray[0].match(/,/)) {
        return cellsArray[0].split(',')
    } else {
        return cellsArray[0].split('+')
    }
}

const getTypeOfResult = typeOfData => {
    let numberCount = 0
    let moneyCount = 0
    let stringCount = 0
    // let emtyStringCount = 0

    typeOfData.forEach(type => {
        switch (type) {
            case 'number':
                numberCount++
                break

            case 'moneyString':
                moneyCount++
                break

            case 'string':
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
        (moneyCount && stringCount)
    )
        return 'different data types'

    if (numberCount > moneyCount && numberCount > stringCount) return 'number'

    if (moneyCount > numberCount && moneyCount > stringCount)
        return 'moneyString'

    if (stringCount > numberCount && stringCount > moneyCount) return 'string'

    // if (emtyStringCount && !stringCount  && !moneyCount &&!numberCount) return "emptyString"
}

const formFunctionExecution = (inputValue, tableCells, typeOfFunction) => {
    let emptyValue
    const typeOfData = []  
    typeOfFunction === "CONCAT" ? emptyValue = "" : emptyValue = 0
    
    const cellsIdArray = getCellsId(inputValue)

    const cellsData = cellsIdArray.map(cellId => {
        let value
        tableCells.forEach(cell => {
            if (cell.id === cellId) {
                typeOfFunction === "CONCAT" ? value = cell.functionResult :
                value = Number(cell.functionResult.replace(/\s|\$/g, ''))

                typeOfData.push(cell.type)
            }
        })
        if (!value) return emptyValue
        return value
    })

    const resultType = getTypeOfResult(typeOfData)

    let result
    switch (typeOfFunction) {
      case "SUM":
        result = cellsData.reduce((item, sum) => item + sum)
        break;

      case "AVERAGE":
        console.log("get in AVERAGE")
        result = (cellsData.reduce((item, sum) => item + sum)) / cellsData.length
        break;

        case "CONCAT":
            console.log("get in CONCAT")
            result = cellsData.reduce((item, sum) => item + sum)
            break;

      default:
        break;
    }
    

    return {
        result,
        resultType,
    }
}

// export const getAverage = (inputValue, tableCells) => {

// }

export default formFunctionExecution