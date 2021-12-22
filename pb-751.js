/* Star Shorthand
Write a function that converts a string into star shorthand. If a character is repeated n times, convert it into character*n.

Examples
toStarShorthand("abbccc") ➞ "ab*2c*3"

toStarShorthand("77777geff") ➞ "7*5gef*2"

toStarShorthand("abc") ➞ "abc"

toStarShorthand("") ➞ ""
Notes
Leave lone occurrences of a character as is.
Return an empty string if given an empty string input.
 */

function toStarShorthand(str) {
    if (!str) {
        return ''
    }
    let uniVal = [...new Set(str.split(""))]

    let s = ""
    for (let i = 0; i < uniVal.length; i++) {
        let reg = new RegExp(`${uniVal[i]}`, 'gi')
        let find = str.match(reg)
        s = s + ((find && find.length >= 2) ? `${uniVal[i]}*${find.length}` : uniVal[i])
    }
    return s
}

console.log(toStarShorthand("77777geff"))