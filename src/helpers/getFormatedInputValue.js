import {
    chekForString,
    chekForMoneyString,
    chekForFunctions,
} from './formCheckingFunctions'

import {
    formatFormToMoneyString,
    formatFormToNumberString
} from './formFormatingFunctions'

import getInputFunctionResult from './getInputFunctionResult'

const getFormatedInputValue = (inputValue, tableCells) => {
    if (inputValue === '') {
        return {
            value: '',
            type: 'emptyString',
        }
    } else if (chekForFunctions(inputValue)) {
        console.log("get into chekForFunctions")
        const result = getInputFunctionResult(inputValue, tableCells)

        let formatedResult

        // check for error message in result

        typeof result.result === 'string'
            ? formatedResult = result.result
            : formatedResult = formatFormToNumberString( result.result.toString() )

        return {
            value: inputValue,
            functionResult: formatedResult,
            type: 'function',
            typeOfResult: result.resultType,
        }

    } else if (chekForMoneyString(inputValue)) {
        const formatedInput = formatFormToMoneyString(inputValue)
        return {
            value: formatedInput,
            type: 'moneyString',
            typeOfResult: 'moneyString',
        }

    } else if (chekForString(inputValue)) {
        return {
            value: inputValue,
            type: 'string',
            typeOfResult: 'string',
        }
        
    } else {
        const formatedInput = formatFormToNumberString(inputValue)
        return {
            value: formatedInput,
            type: 'number',
            typeOfResult: 'number',
        }
    }
}

export default getFormatedInputValue
