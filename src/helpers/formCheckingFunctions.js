import {
  regexContainsTwoDotsComas,
  regexContainsTwoMoneySigns,
  regexContainsAllExceptDotComaDigit,
  regexContainsMoneySign,
  regexContainsURL,
  regexContainsFunction,
  regexIsSumFunction,
  regexIsAverageFunction,
  regexIsConcatFunction
} from "./regExp"

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

export const checkForSUMFunction = inputValue => 
  regexIsAverageFunction.test(inputValue)

export const checkForAVERAGEFunction = inputValue => 
  regexIsSumFunction.test(inputValue)

export const checkForCONCATFunction = inputValue => 
  regexIsConcatFunction.test(inputValue)