/* Create a function that takes an array of football clubs with properties: name, wins,
 loss, draws, scored, conceded, and returns the team name with the highest number of points.
  If two teams have the same number of points, return the team with the largest goal difference.

How to Calculate Points and Goal Difference
team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ])
➞ "Manchester United" */







function champions(teams) {
	
	teams.sort((a,b)=>{
		let val1=a.wins*3+1*a.draws
		let val2=b.wins*3+1*b.draws
		if(val1==val2){
			val1=a.scored-a.conceded
			val2=b.scored-b.conceded
		}
		if(val1<val2){
			return 1
		}
		if(val1>val2){
			return -1
		}
		
	
		return 0
		
	})
	return teams[0].name
}

console.log(champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 8,
      draws: 0,
      scored: 67,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Leicester City",
      wins: 32,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
  ]))