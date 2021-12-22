/* Burglary Series (16): Nested objects
And who cursed the most in the fight between you and your spouse?

Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:

If you, return "ME!"
If your spouse, return "SPOUSE!"
If a draw, return "DRAW!"
Examples
determineWhoCursedTheMost({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}) ➞ "DRAW!"


determineWhoCursedTheMost({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
}) ➞ "ME!"


determineWhoCursedTheMost({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 44,
  },
  round3: {
    me: 10,
    spouse: 55,
  },
}) ➞ "SPOUSE!"
Notes
N/A */







function determineWhoCursedTheMost(obj) {
    let sum1 = 0, sum2 = 0
    for (let v in obj) {
        sum1 = sum1 + obj[v].me
        sum2 = sum2 + obj[v].spouse
    }
    if (sum1 > sum2) {
        return "ME!"
    } else if (sum2 > sum1) {
        return "SPOUSE!"
    }
    return "DRAW!"
}

console.log(determineWhoCursedTheMost({
    round1: {
        me: 10,
        spouse: 5,
    },
    round2: {
        me: 5,
        spouse: 10,
    },
    round3: {
        me: 10,
        spouse: 10,
    },
}))