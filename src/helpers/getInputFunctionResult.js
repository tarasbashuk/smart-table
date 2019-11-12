import { getTypeOfFunction } from './formCheckingFunctions'

import { formatFormToMoneyString } from './formFormatingFunctions'

import { formFunctionExecution, URLFunctionExecution } from './formFunctionExecution'

// Depending on type of result getTypeOfFunction invoke URLFunctionExecution or formFunctionExecution
// return object functionResult or error message, which will display at cell 

const getInputFunctionResult = (inputValue, tableCells, currentCellID) => {
    let functionResult
    const typeOfFunction = getTypeOfFunction(inputValue)

    if (typeOfFunction === "HYPER") {
        functionResult = URLFunctionExecution(inputValue)

    } else {    
        functionResult = formFunctionExecution(
        inputValue,
        tableCells,
        typeOfFunction,
        currentCellID
    )}


    if (functionResult.resultType === 'different data types') {
        functionResult.result = functionResult.resultType
    }

    if (functionResult.resultType === "any cell was not indicated") {
        functionResult.result = functionResult.resultType
    }
    
    if (functionResult.resultType === 'moneyString') {
        functionResult.result = formatFormToMoneyString(
            functionResult.result.toString()
        )
    }
    return functionResult
}

export default getInputFunctionResult
