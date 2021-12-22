/* 
Current Streak
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
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
]) ➞ 3

currentStreak("2019-09-25", [
  {
    "date": "2019-09-16"
  },
  {
    "date": "2019-09-17"
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
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0. */







function currentStreak(today, arr) {
    if (arr.length && arr[0].date == today) {
        return 1
    }
    let counter = 0, found = false
    for (let i = 0; i < arr.length - 1; i++) {
        let d1 = arr[i]['date'].split('-')
        d1 = parseInt(d1[d1.length - 1])
        let d2 = arr[i + 1]['date'].split('-')
        d2 = parseInt(d2[d2.length - 1])
        if (d1 == d2 - 1) {
            counter++
        } else if (d1 != d2 - 1) {
            counter = 0
        }
        if (today == arr[i + 1]['date']) {
            found = true
            break
        }

    }
    return found ? counter + 1 : 0
}

console.log(currentStreak("2019-09-23", [
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