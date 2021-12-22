/* Burglary Series (06): Convert to Number
You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair,
 convert all the values to numbers.

Examples
convertToNumber({ piano: "200" }) ➞ { piano: 200 }

convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }

convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
Notes
N/A */


function convertToNumber(obj) {
  for (let v in obj) {
    obj[v] = Number(obj[v])
  }
  return obj
}
console.log(convertToNumber({ piano: "200" }))