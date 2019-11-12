import { regexFormatDigitsWithSpaces, regexContainsURL } from './regExp'


// Functions for formatting data to display data/result in the cell

export const formatFormToMoneyString = inputValue => {
    const input = inputValue.replace('$', '').replace(',', '.')
    const formatedInput = Number(input)
        .toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'USD',
        })
        .replace(',', '.')

    return formatedInput
}

export const formatFormToNumberString = inputValue => {
    const input = Number(inputValue.replace(',', '.'))
    const formatedInput = input
        .toFixed(2)
        .toString()
        .replace(regexFormatDigitsWithSpaces, ' ')

    return formatedInput
}

export const formatFormToURLString = inputValue => {
    const formatedInput = inputValue.match(regexContainsURL)
    if (!formatedInput) return "Wrong URL format"

    return formatedInput[0]
}
