/*get most frequent word alphabatically in given string after excluding given words*/


function mostFrequentWord(str, excluding) {
  let s = str.split(/[\.\s,]/), num = -10000, result = [], finalResult = []
  for (let i = 0; i < s.length; i++) {
    let counter = 0
    if (excluding.indexOf(s[i]) == -1 && s[i] != '') {
      for (let j = 0; j < s.length; j++) {
        if (s[i] == s[j]) {
          counter++
        }
      }


    }
    if (counter >= num) {
      num = counter
      result.push(s[i])
    }
  }
  let uniQue = []
  for (let m = 0; m < result.length; m++) {
    let counter = 0
    for (let l = 0; l < result.length; l++) {
      if (result[m] == result[l]) {
        counter++
      }
    }
    if (counter == num) {
      if (uniQue.indexOf(result[m]) == -1) {

        finalResult.push(result[m])
        uniQue.push(result[m])
      }
    }
  }

  for (let k = 0; k < finalResult.length; k++) {

    for (let p = k + 1; p < finalResult.length; p++) {
      let v1 = finalResult[k].charCodeAt(0)
      let v2 = finalResult[p].charCodeAt(0)
      if (((v1 >= 65 && v1 <= 90) && (v2 >= 65 && v2 <= 90)) || ((v1 >= 97 && v1 <= 122) && (v2 >= 97 && v2 <= 122))) {
        console.log(finalResult[k])
        if (finalResult[k].charCodeAt(0) > finalResult[p].charCodeAt(0)) {
          console.log(finalResult[k].charCodeAt(0))
          let swap = finalResult[k]
          finalResult[k] = finalResult[p]
          finalResult[p] = swap
        }
      }

    }
  }

  return finalResult.join(",")



  /*shortcut*/
/* 
  s.forEach(x=>{
    let counter=0
    if(excluding.indexOf(x)==-1 && x!=''){
        s.forEach(y=>{
          if(x==y){
            counter++
          }
        })
    }
    if(counter>=num){
      num=counter
      result.push(x)
    }
  })
  finalResult=result.filter(val=>{
    let counter=0
    result.forEach(val1=>{
      if(val==val1){
        counter++
      }
    })
    return counter==num
  })
  finalResult=[...new Set(finalResult)]
  finalResult.sort((a,b)=>{
    let v1=a.charCodeAt(0)
    let v2=b.charCodeAt(0)
    if(((v1>=65 && v1<=90) && (v2>=65 && v2<=90)) || ((v1>=97 && v1<=122) && (v2>=97 && v2<=122)) ){
      if(v1<v2){
        return -1
      }
      if(v1>v2){
        return 1
      }
      return 0
    }
  })
  return finalResult.join(",")
   */

}


console.log(mostFrequentWord("Best items in category are Samsung, Lenovo . Samsung items are nice.Lenovo are cool", ['in', 'are']))