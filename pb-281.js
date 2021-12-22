/* Standard Competition Ranking
Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, 
so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

No matching values:

Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
With matching values:

Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.

Examples
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
Notes
The highest score has a rank value of 1. */










function competitionRank(results, person) {
  let rank = []
  for (let v in results) {
    rank.push({ ['name']: v, score: results[v] })
  }
  rank = rank.sort((a, b) => b.score - a.score)
  let l = 1, m = 1
  for (let i = 0; i < rank.length; i++) {
    if (i == 0) {
      rank[i]['rank'] = l

    } else if (rank[i].score == rank[i - 1].score) {
      rank[i]['rank'] = l
      m++
    } else {

      rank[i]['rank'] = ++m
      l = m

    }

    if (rank[i].name == person) {
      return rank[i]['rank']
    }
  }

}

console.log(competitionRank(

  {
    Kate: 92,
    Carol: 92,
    Jess: 87,
    Bruce: 87,
    Scott: 84
  }, "Bruce"
))