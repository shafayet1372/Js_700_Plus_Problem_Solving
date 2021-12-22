/* 
Burglary Series (17): Who is the Winner?
The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.

Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner 
of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.

If you won more rounds than your spouse, return "ME!"
If your spouse won more rounds, return "SPOUSE!"
If you are tied, return "NOBODY!"
Examples
determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}) ➞ "NOBODY!"


determineWinnerOfFight({
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
}) ➞ "SPOUSE!"
Notes
N/A */





function determineWinnerOfFight(obj) {
    let me = 0, sp = 0
    for (let v in obj) {
        if (obj[v].me > obj[v].spouse) {
            me++
        } else if (obj[v].me < obj[v].spouse) {
            sp++
        }
    }
    if (me > sp) {
        return 'ME!'
    } else if (sp > me) {
        return "SPOUSE!"
    }
    return "NOBODY!"
}


console.log(determineWinnerOfFight({
    round1: {
        me: 10,
        spouse: 5,
    },
    round2: {
        me: 5,
        spouse: 20,
    },
    round3: {
        me: 10,
        spouse: 10,
    },
}))