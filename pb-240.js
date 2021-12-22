/* most frequent word in give string*/



function mostFrequentword(str) {
  let s = str.split(/[\.\s\?]/)
  let result = [], visited = [], num = -10000

  for (let i = 0; i < s.length; i++) {
    let counter = 0
    if (s[i] != '') {
      for (let j = 0; j < s.length; j++) {
        if (s[i] == s[j]) {
          counter++
        }
      }

      if (counter >= num) {
        num = counter
        result.push(s[i])
      }

    }

  }
  // s.forEach(val=>{
  //   let count=0
  //   s.forEach(x=>{
  //     if(val==x && x!=''){
  //       count++
  //     }
  //   })
  //   if(count>=num){
  //     num=count
  //     result.push(val)
  //   }
  // })
  // console.log(result)

  // // let finalresuult.filter(val=>{
  // //   let count=0
  // //   result.forEach(x=>{
  // //      if(val==x){
  // //        count++
  // //      }
  // //   })
  // //   return count==num
  // // })
  let finalresuult = []
  for (let m = 0; m < result.length; m++) {
    let count = 0
    for (let l = 0; l < result.length; l++) {
      if (result[m] == result[l]) {
        count++
      }
    }
    if (count == num) {
      finalresuult.push(result[m])
    }
  }
  return [...new Set(finalresuult)].join(",")
}


console.log(mostFrequentword("Best item in category. Lenovo samsung Lenovo ? item"))