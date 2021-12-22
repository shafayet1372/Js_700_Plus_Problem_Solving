/* longest substring length with same letters if k characters can be replaced */

function longestSubstring(str, k) {

  let uniquVal = [...new Set(str.split(""))]
  let s = str.split(""), num = -1000

  for (let i = 0; i < uniquVal.length; i++) {


    for (let j = 0; j < s.length; j++) {
      let l = 0, s1 = s.slice()
      if (uniquVal[i] == s[j]) {

        let m = j + 1, newStr = uniquVal[i]

        while (l < k) {
          if (s1[m] != uniquVal[i]) {
            s1[m] = uniquVal[i]

            l++
          }
          newStr = newStr + s1[m]

          m++
        }

        if (s1[m] == uniquVal[i]) {
          newStr = newStr + uniquVal[i]
        }

        if (newStr.length > num) {
          num = newStr.length
        }

      }


    }

  }
  return num
}

console.log(longestSubstring('bccbababd', 2))