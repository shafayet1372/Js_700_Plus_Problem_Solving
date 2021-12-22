/* Burglary Series (05): Third Most Expensive
Time to call your lover to inform what he/she lost in the burglary.

Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

Examples
thirdMostExpensive({}) ➞ false

thirdMostExpensive({ piano: 100, tv: 200 }) ➞ false

thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })  ➞ "stereo"

thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) ➞ "mirror"
Notes
All prices will be of different monetary values. */






function thirdMostExpensive(obj) {
  let ar = []
  let counter = 0
  for (let v in obj) {
    ar.push({ ['name']: v, price: obj[v] })
    counter++
  }
  if (counter < 3) {
    return false
  }

  return ar.sort((a, b) => b.price - a.price)[2].name
}

console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 }))