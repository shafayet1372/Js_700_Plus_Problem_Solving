/* compare two strings with backspace character*/


function compareString(str1, str2) {
    function removeHash(val) {
        let s = val.split("")
        for (let i = 0; i < s.length; i++) {
            if (s[i + 1] == '#') {
                s.splice(i, 2)
                i = i - 2
            }
        }
        return s
    }
    str1 = removeHash(str1)
    str2 = removeHash(str2)
    let m = 0
    console.log(str1, str2)
    return str1.every(val => val == str2[m++])
}


console.log(compareString('bcd##e', 'bd#e'))
