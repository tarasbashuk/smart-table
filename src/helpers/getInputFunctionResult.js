import {
    checkForSUMFunction,
    checkForAVERAGEFunction,
    checkForCONCATFunction
} from "./formCheckingFunctions"

import {
    formatFormToMoneyString,
    // formatFormToNumberString,
    // formatFormToURLString,
} from './formFormatingFunctions'

import {getSum} from './formFunctionExecution'

const getInputFunctionResult = (inputValue, tableCells) => {
    console.log(inputValue)
    console.log(checkForSUMFunction(inputValue))
    if (checkForSUMFunction(inputValue)) {
          console.log("Зашли в checkForSUMFunction")
        const functionResult = getSum(inputValue, tableCells)

        // if (functionResult.resultType === "emptyString") {
        //     return "0"
        // }
        if (functionResult.resultType === "different data types") {
            return "different type of data"
        }
        if (functionResult.resultType === "moneyString") {
            return formatFormToMoneyString(functionResult.result.toString())
        }

        return functionResult.result
    // } else if (checkForAVERAGEFunction(inputValue)) {
    //     const formatedInput = formatFormToURLString(inputValue)
    //     return formatedInput
    // } else if (checkForCONCATFunction(inputValue)) {
    //     const formatedInput = formatFormToURLString(inputValue)
    //     return formatedInput
    } else {
        console.log("Wrong format for functions")
        return "Wrong format"
    }
}

export default getInputFunctionResult
