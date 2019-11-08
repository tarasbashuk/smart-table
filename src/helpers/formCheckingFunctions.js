import {
    regexContainsTwoDotsComas,
    regexContainsTwoMoneySigns,
    regexContainsAllExceptDotComaDigit,
    regexContainsMoneySign,
    regexContainsURL,
    regexContainsFunction,
    regexIsSumFunction,
    regexIsAverageFunction,
    regexIsConcatFunction,
    regexIsHyperlinkFunction
} from './regExp'

export const chekForString = inputValue =>
    regexContainsTwoDotsComas.test(inputValue) ||
    regexContainsAllExceptDotComaDigit.test(inputValue) ||
    regexContainsTwoMoneySigns.test(inputValue)

export const chekForMoneyString = inputValue =>
    regexContainsMoneySign.test(inputValue)

export const chekForURLString = inputValue =>
     regexContainsURL.test(inputValue)

export const chekForFunctions = inputValue =>
    regexContainsFunction.test(inputValue)

export const getTypeOfFunction = inputValue => {
    if (regexIsSumFunction.test(inputValue)) return 'SUM'
    if (regexIsAverageFunction.test(inputValue)) return 'AVERAGE'
    if (regexIsConcatFunction.test(inputValue)) return 'CONCAT'
    if (regexIsHyperlinkFunction.test(inputValue)) return 'HYPER'
    return 'Wrong format of function'
}
