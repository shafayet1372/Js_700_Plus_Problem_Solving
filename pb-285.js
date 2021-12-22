/* Longest Streak
Create a function that takes an array of date objects and return the "longest streak" (i.e. number of consecutive days in a row).

Example
longestStreak([
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-20"
  },
  {
    "date": "2019-09-26"
  },
  {
    "date": "2019-09-27"
  },
  {
    "date": "2019-09-30"
  }
]) ➞ 3
Notes
An empty array should return 0.




 */
function longestStreak(arr) {
  let counter = 0, result = []
  if (arr.length == 1) {
    return 1
  } else if (arr.length == 0) {
    return 0
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let val1 = arr[i]['date'].split("-")
    let d1 = parseInt(val1[val1.length - 1])
    let val2 = arr[i + 1]['date'].split("-")
    let d2 = parseInt(val2[val2.length - 1])

    if ((d1 == '31' && d2 == '01') || (d1 == '30' && d2 == '01')) {
      counter++
    } else if (d1 == (d2 - 1) && i != arr.length - 2) {
      counter++
    } else if (i == arr.length - 2) {

      result.push(++counter)
      counter = 0
    } else {
      result.push(counter)
      counter = 0
    }

  }

  return result.sort((a, b) => b - a)[0] + 1

}

console.log(longestStreak([
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-20"
  },
  {
    "date": "2019-09-21"
  },
  {
    "date": "2019-09-22"
  },
  {
    "date": "2019-09-23"
  }
]))