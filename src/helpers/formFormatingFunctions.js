export const formatFormToMoneyString = inputValue => {
    const input = inputValue.replace("$", "").replace(",", ".")
    const formatedInput = Number(input).toLocaleString("ua-UA", {
      style: "currency",
      currency: "USD"
    })

    return formatedInput
}

export const formatFormToNumberString = inputValue => {
    const input = Number(inputValue.replace(",", "."))
    const formatedInput = input
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    
    return formatedInput
}
