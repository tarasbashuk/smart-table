import {
    checkForSUMFunction,
    checkForAVERAGEFunction,
    checkForCONCATFunction
} from "./formCheckingFunctions"

import  { regexFindCellsID } from "./regExp"


export const getCellsArray = inputValue => {
    const cellsArray = inputValue.match(regexFindCellsID)
    return cellsArray[0].split(',')
}

export const getInputFunctionResult = (inputValue, cellsData) => {

    // if (checkForSUMFunction(inputValue)) {
        const inputResult = cellsData.reduce((item, sum) => item+sum)

        return inputResult
    // } else if (checkForAVERAGEFunction(inputValue)) {
    //     const formatedInput = formatFormToURLString(inputValue)
    //     return formatedInput
    // } else if (checkForCONCATFunction(inputValue)) {
    //     const formatedInput = formatFormToURLString(inputValue)
    //     return formatedInput
    // } else {
    //     console.warn("Wrong format for functions")
    //     return "Wrong format for functions"
    // }
}
