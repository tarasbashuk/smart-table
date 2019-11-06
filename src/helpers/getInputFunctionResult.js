import { getTypeOfFunction } from './formCheckingFunctions'

import { formatFormToMoneyString } from './formFormatingFunctions'

import formFunctionExecution from './formFunctionExecution'

const getInputFunctionResult = (inputValue, tableCells) => {
    const typeOfFunction = getTypeOfFunction(inputValue)
    const functionResult = formFunctionExecution(
        inputValue,
        tableCells,
        typeOfFunction
    )

    if (functionResult.resultType === 'different data types') {
        functionResult.result = 'different type of data'
    }
    if (functionResult.resultType === 'moneyString') {
        functionResult.result = formatFormToMoneyString(
            functionResult.result.toString()
        )
    }
    return functionResult
}

export default getInputFunctionResult
