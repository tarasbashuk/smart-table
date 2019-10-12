export const chekForString = inputValue => {
    const regexTwoDotsComas = /(\.|,).*(\.|,)/
    const regexTwoMoneySigns = /(\$).*(\$)/
    const regexAllExceptDotComaDigit = /[^.,\$\d]/

    return (
      regexTwoDotsComas.test(inputValue) ||
      regexAllExceptDotComaDigit.test(inputValue) ||
      regexTwoMoneySigns.test(inputValue)
    )
  }

export  const chekForMoneyString = inputValue => {
    const regexContainsMoneySign = /\d+\s?\$$/g

    return regexContainsMoneySign.test(inputValue)
  }

  