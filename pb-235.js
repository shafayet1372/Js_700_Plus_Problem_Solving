/* find longest substring length with no repeating characters */

function longestSubstrLength(str) {
    let num = -1000, s = str.split("")
    for (let i = 0; i < s.length; i++) {
        let visited = [], newStr = s[i]

        for (let j = i + 1; j < s.length; j++) {
            if (s[i] != s[j] && visited.indexOf(s[j]) == -1) {

                newStr = newStr + s[j]
                visited.push(s[j])
            }
        }

        if (newStr.length > num) {
            num = newStr.length
        }

    }
    return num
}

console.log(longestSubstrLength("babccbacd", 3))