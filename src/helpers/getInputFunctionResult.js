import { getTypeOfFunction } from './formCheckingFunctions'

import { formatFormToMoneyString } from './formFormatingFunctions'

import { formFunctionExecution, URLFunctionExecution } from './formFunctionExecution'

const getInputFunctionResult = (inputValue, tableCells) => {
    let functionResult
    const typeOfFunction = getTypeOfFunction(inputValue)
    console.log("TCL: getInputFunctionResult -> typeOfFunction", typeOfFunction)

    if (typeOfFunction === "HYPERLINK") {
        console.log("get into HYPERLINK")
        functionResult = URLFunctionExecution(inputValue)

    } else {    
        console.log("get into other functions")
        functionResult = formFunctionExecution(
        inputValue,
        tableCells,
        typeOfFunction
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
