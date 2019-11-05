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

import formFunctionExecution from './formFunctionExecution'

const getInputFunctionResult = (inputValue, tableCells) => {

    if (checkForSUMFunction(inputValue)) {
        const functionResult = formFunctionExecution(inputValue, tableCells, "SUM")

        if (functionResult.resultType === "different data types") {
            return "different type of data"
        }
        if (functionResult.resultType === "moneyString") {
            return formatFormToMoneyString(functionResult.result.toString())
        }
        return functionResult.result
        
    } else if (checkForAVERAGEFunction(inputValue)) {
        const functionResult = formFunctionExecution(inputValue, tableCells, "AVERAGE")
        console.log("TCL: getInputFunctionResult -> functionResult", functionResult)

        if (functionResult.resultType === "different data types") {
            return "different type of data"
        }
        if (functionResult.resultType === "moneyString") {
            return formatFormToMoneyString(functionResult.result.toString())
        }

        return functionResult.result
    } else if (checkForCONCATFunction(inputValue)) {
        const functionResult = formFunctionExecution(inputValue, tableCells, "CONCAT")

        // if (functionResult.resultType === "different data types") {
        //     return "different type of data"
        // }

        return functionResult.result

    } else {
        console.log("Wrong format for functions")
        return "Wrong format"
    }
}

export default getInputFunctionResult
