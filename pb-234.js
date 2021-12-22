/* find longest substring length with k distinct characters */

function longestSubstrLength(str, k) {
    let num = -1000, s = str.split("")
    for (let i = 0; i < s.length; i++) {
        let unique
        let newStr = s[i]
        for (let j = i + 1; j < s.length; j++) {

            newStr = newStr + s[j]
            if ([...new Set(newStr.split(""))].length == k) {
                if (newStr.length >= num) {
                    num = newStr.length

                }

            }

        }

    }
    return num
}

console.log(longestSubstrLength("bccbababd", 3))
