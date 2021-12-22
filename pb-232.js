/* reverse individiual word in  String */

function reverseIndividualWord(str) {
    let s = str.split("")
    let i = 0, result = [], newStr = ''
    while (i < s.length) {
        if (s[i] == ' ') {
            result[result.length] = " "
        } else {
            newStr = newStr + s[i]

            if (s[i + 1] == ' ' || i == s.length - 1) {
                newStr = newStr.split("")
                let j = newStr.length - 1
                while (j >= 0) {
                    result[result.length] = newStr[j]
                    j--
                }
                newStr = ''
            }
        }
        i++
    }
    return result.join("")
}

console.log(reverseIndividualWord("coding simplified nice"))
