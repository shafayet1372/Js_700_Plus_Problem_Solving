/* Name Count Equality

Create a function that counts the embedded names in the string and determines the equality. The names are embedded in a string of mixed special 
symbols and characters. The names to be counted to are adjoined with the ampersand symbol & and as the second parameter. See the following examples for more details.
Examples

equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
➞ {"Peter":6, "Paul": 6, "equality": true}

equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
// "difference" key is added to the object if count is not equal.

equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
➞ {"Ken": 0, "Tom": 0, "equality": true}

Notes

Make sure to return the result as an object with the corresponding keys seen in the above examples and the difference key when needed. */

function equalCount(str, names) {
  let s = names.split('&')
  let fname = s[0], lname = s[1]
  let countObj = { [fname]: 0, [lname]: 0, ['equality']: true }

  let rege = str.match(new RegExp(`\(${fname}|${lname}\)`, 'gi'))

  if (!rege) {
    return countObj
  }
  let result = rege.reduce((acc, val) => {
    if (acc[val] || acc[val] == 0) {
      acc[val]++
    }
    return acc
  }, countObj)

  if (result[fname] == result[lname]) {
    result['equality'] = true
    return result
  }
  result["equality"] = false
  result["difference"] = result[fname] > result[lname] ? result[fname] - result[lname] : result[lname] - result[fname]
  return result
}

console.log(equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom"))