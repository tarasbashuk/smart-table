import {
    checkForSUMFunction,
    checkForAVERAGEFunction,
    checkForCONCATFunction
} from "./formCheckingFunctions"

const getInputFunctionResult = inputValue => {
    if (checkForSUMFunction(inputValue)) {
        const inputResult = formatFormToURLString(inputValue)
        return formatedInput
    } else if (checkForAVERAGEFunction(inputValue)) {
        const formatedInput = formatFormToURLString(inputValue)
        return formatedInput
    } else if (checkForCONCATFunction(inputValue)) {
        const formatedInput = formatFormToURLString(inputValue)
        return formatedInput
    } else {
        console.warn("Wrong format for functions")
        return "Wrong format for functions"
    }
}

export default getInputFunctionResult
