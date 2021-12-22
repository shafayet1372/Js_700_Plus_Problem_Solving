/*get frequency of every word in string
*make all the lowercase
*random order
*decrease frequency wise
*alphabetically
*if frequency are same sort it alphabatically

*/


function mostFrequentWord(str) {
  let s = str.split(/[\.\s,]/), num = -10000, result = [], visited = []
  s.forEach(x => {
    let counter = 0
    if (x != '' && visited.indexOf(x) == -1) {
      s.forEach(y => {
        if (x == y) {
          counter++
        }
      })
      result.push({ ['f']: counter, ['name']: x.toLowerCase() })
      visited.push(x)
    }

  })

  result.sort((a, b) => {
    let v1 = a.f
    let v2 = b.f

    if (v1 == v2) {
      v1 = a.name.charCodeAt(0)
      v2 = b.name.charCodeAt(0)
      if (v1 < v2) {
        return -1
      }
      if (v1 > v2) {
        return 1
      }
      return 0
    } else {
      if (v1 < v2) {
        return 1
      }
      if (v1 > v2) {
        return -1
      }
      return 0
    }


  })
  return result

}


console.log(mostFrequentWord("Best items in category are Samsung, Lenovo . Samsung items are nice.Lenovo are cool"))