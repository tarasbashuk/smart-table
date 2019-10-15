import { chekForString, chekForMoneyString } from "./formCheckingFunctions"

import {
  formatFormToMoneyString,
  formatFormToNumberString
} from "./formFormatingFunctions"

const getFormatedInputValue = inputValue => {
  if (inputValue === "") {
    return { value: "", type: "emptyString" }

  } else if (chekForString(inputValue)) {
    return  { value: inputValue, type: "string" }

  } else if (chekForMoneyString(inputValue)) {
    const formatedInput = formatFormToMoneyString(inputValue)
    return { value: formatedInput, type: "moneyString" }

  } else {
    const formatedInput = formatFormToNumberString(inputValue)
    return { value: formatedInput, type: "number" }

  }
}

export default getFormatedInputValue
