import {
    checkForSUMFunction,
    checkForAVERAGEFunction,
    checkForCONCATFunction
} from "./formCheckingFunctions"

import {getSum} from './formFunctionExecution'

const getInputFunctionResult = (inputValue, tableCells) => {
    console.log(inputValue)
    console.log(checkForSUMFunction(inputValue))
    if (checkForSUMFunction(inputValue)) {
          console.log("Зашли в checkForSUMFunction")
        const functionResult = getSum(inputValue, tableCells)
        return functionResult
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
