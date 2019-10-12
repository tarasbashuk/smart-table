import { chekForString, chekForMoneyString } from "./formCheckingFunctions"

import {
  formatFormToMoneyString,
  formatFormToNumberString
} from "./formFormatingFunctions"

const getFormatedInputValue = inputValue => {
  if (inputValue === "") {
    return { value: "", type: "emptyString" }

  } else if (chekForString(inputValue)) {
    console.log("string - ", inputValue)
    return  { value: inputValue, type: "string" }

  } else if (chekForMoneyString(inputValue)) {
    const formatedInput = formatFormToMoneyString(inputValue)
    console.log("money - ", formatedInput)
    return { value: formatedInput, type: "moneyString" }

  } else {
    const formatedInput = formatFormToNumberString(inputValue)
    console.log("number - ", formatedInput)
    return { value: formatedInput, type: "number" }

  }
}

export default getFormatedInputValue
