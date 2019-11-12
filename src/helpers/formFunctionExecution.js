import { regexFindCellsID } from './regExp'
import { formatFormToURLString } from './formFormatingFunctions'

// Get ID's (adresses) of cells from function body

const getCellsId = inputValue => {
    const cellsArray = inputValue.match(regexFindCellsID)

    if (!cellsArray) return null

    if (cellsArray[0].match(/,/)) {
        return cellsArray[0].split(',')
    } else {
        return cellsArray[0].split('+')
    }
}

// Define type of function execution result according to type of cells data

const getTypeOfResult = typeOfData => {
    let numberCount = 0
    let moneyCount = 0
    let stringCount = 0
    let URLCount = 0

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

            case 'URLString':
                URLCount++
                break

            default:
                break
        }
    })

    if (
        (numberCount && moneyCount) ||
        (numberCount && stringCount) ||
        (moneyCount && stringCount) ||
        (URLCount && stringCount) ||
        (URLCount && moneyCount) ||
        (URLCount && numberCount)
    )
        return 'different data types'

    if (
        numberCount > moneyCount &&
        numberCount > stringCount &&
        numberCount > URLCount
    )
        return 'number'

    if (
        moneyCount > numberCount &&
        moneyCount > stringCount &&
        moneyCount > URLCount
    )
        return 'moneyString'

    if (
        stringCount > numberCount &&
        stringCount > moneyCount &&
        stringCount > URLCount
    )
        return 'string'
}

//Execute SUM, AVERAGE and CONCAT functions

export const formFunctionExecution = (
    inputValue,
    tableCells,
    typeOfFunction,
    currentCellID
) => {
    let value, emptyValue, result
    const typeOfData = []

    //Define value for empty string depending on type of function

    typeOfFunction === 'CONCAT' ? (emptyValue = '') : (emptyValue = 0)

    const cellsIdArray = getCellsId(inputValue)
    if (!cellsIdArray) return { resultType: 'any cell was not indicated' }

    //Get values and type of data of cells

    const cellsData = cellsIdArray.map(cellId => {
        tableCells.forEach(cell => {
            if (cell.id === cellId) {
                typeOfFunction === 'CONCAT'
                    ? (value = cell.functionResult)
                    : (value = Number(
                          cell.functionResult.replace(/\s|\$/g, '')
                      ))

                typeOfData.push(cell.typeOfResult)
            }
            // For preventing recursion when function refers to itself
            if (currentCellID === cellId) {
                typeOfFunction === 'CONCAT' ? (value = '') : (value = 0)
            }
        })

        return !value ? emptyValue : value
    })

    let resultType = getTypeOfResult(typeOfData)

    switch (typeOfFunction) {
        case 'SUM':
            result = cellsData.reduce((item, sum) => item + sum)
            break

        case 'AVERAGE':
            result =
                cellsData.reduce((item, sum) => item + sum) / cellsData.length
            break

        case 'CONCAT':
            result = cellsData.reduce((item, sum) => item + sum)
            resultType = 'string'
            break

        default:
            break
    }

    return {
        result,
        resultType,
    }
}

//Gets URL from string, return it with result type

export const URLFunctionExecution = inputValue => {
    const result = formatFormToURLString(inputValue)

    return {
        result,
        resultType: 'URLString',
    }
}
