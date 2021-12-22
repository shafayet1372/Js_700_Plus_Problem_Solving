/* smallest substr which contains all characters of pattern*/




function smallestSubStr(str, pattern) {
  let s = str.split("")
  let num = 10000
  let p = pattern.split("")
  for (let i = 0; i < s.length; i++) {
    let pa = p.slice(), indexs = [], counter = 0
    for (let j = i; j < s.length; j++) {
      for (let m = 0; m < pa.length; m++) {
        if (pa[m] == s[j]) {
          indexs.push(j)
          pa.splice(m, 1)
          m++
          counter++
        }
        if (pa.length == 0) {
          break;
        }

      }

    }
    console.log(indexs)
    if ((indexs[indexs.length - 1] - indexs[0]) + 1 < num && counter == pattern.length) {
      num = (indexs[indexs.length - 1] - indexs[0]) + 1
    }
  }
  return num==10000?"not matched":num
}

console.log(smallestSubStr('badeaebcaae', 'aabc'))
