import {
  chekForString,
  chekForMoneyString,
  chekForURLString, 
  chekForFunctions
} from "./formCheckingFunctions"

import {
  formatFormToMoneyString,
  formatFormToNumberString,
  formatFormToURLString
} from "./formFormatingFunctions"

import getInputFunctionResult from "./getInputFunctionResult"

const getFormatedInputValue = (inputValue, tableCells) => {
  if (inputValue === "") {
    return {
      value: "",
      type: "emptyString"
    }
  } else if (chekForFunctions(inputValue)) {
    console.log("Зашли в chekForFunctions")
    const result = getInputFunctionResult(inputValue, tableCells)
    console.log("result-", result)

    let formatedResult
    
    // check for error message in result

    typeof result === "string" ? formatedResult = result : 
    formatedResult = formatFormToNumberString(result.toString())
    
    return {
      value: inputValue,
      functionResult: formatedResult,
      type: "function", 
      hasFunctionResult: true
    }
  } else if (chekForURLString(inputValue)) {
    const formatedInput = formatFormToURLString(inputValue)
    return {
      value: formatedInput,
      type: "URLString"
    }
  } else if (chekForString(inputValue)) {
    return {
      value: inputValue,
      type: "string"
    }
  } else if (chekForMoneyString(inputValue)) {
    const formatedInput = formatFormToMoneyString(inputValue)
    return {
      value: formatedInput,
      type: "moneyString"
    }
  } else {
    const formatedInput = formatFormToNumberString(inputValue)
    return {
      value: formatedInput,
      type: "number"
    }
  }
}

export default getFormatedInputValue
