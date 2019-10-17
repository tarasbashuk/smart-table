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

import {getCellsArray} from "./formFunctionExecution"

const getFormatedInputValue = inputValue => {
  if (inputValue === "") {
    return {
      value: "",
      type: "emptyString"
    }
  } else if (chekForFunctions(inputValue)) {
    const cellsArray = getCellsArray(inputValue)
    return {
      value: inputValue,
      type: "function",
      cellsArray
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
