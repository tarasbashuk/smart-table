export const regexContainsTwoDotsComas = /(\.|,).*(\.|,)/

export const regexContainsTwoMoneySigns = /(\$).*(\$)/

export const regexContainsAllExceptDotComaDigit = /[^.,\$\d]/

export const regexContainsMoneySign = /\d+\s?\$$/

export const regexFormatDigitsWithSpaces =  /\B(?=(\d{3})+(?!\d))/g

export const regexContainsURL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s)]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s)]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s)]{2,}|www\.[a-zA-Z0-9]+\.[^\s)]{2,})/i

// export const regexContainsFunction = /=([A-Z])*\(([A-Z0-9+,])*\)/
export const regexContainsFunction = /=([A-Z])+\(([A-Za-z0-9+,.])*\)/

export const regexIsSumFunction = /=SUM\(([A-Z0-9+])*\)/

export const regexIsAverageFunction = /=AVERAGE\(([A-Z0-9,+])*\)/

export const regexIsConcatFunction = /=CONCAT\(([A-Z0-9,+])*\)/

export const regexIsHyperlinkFunction = /=HYPERLINK\(([A-Za-zА-Яа-я0-9./])*\)/

export const regexFindCellsID = /(?<=\()[A-Z0-9,+]+(?=\))/g