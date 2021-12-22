/* Making Change
Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made 
using USD quarters, dimes, nickels and pennies. Your function should return an object.

Coin	Value
Penny	0.01
Nickel	0.05
Dime	0.10
Quarter	0.25
Examples
makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
Notes
Amount given will always be less than 100 and more than 0. */


function makeChange(c) {
  c = c / 100
  let coin = { "q": 0.25, "d": 0.10, 'n': 0.05, 'p': 0.01 }
  let penny = { "q": 0, "d": 0, 'n': 0, 'p': 0 }
  for (let v in penny) {
    let val = coin[v]
    penny[v] = Math.floor(c / coin[v])
    c = Math.round((c - (val * penny[v])) * 100) / 100

  }
  return penny
}

console.log(makeChange(47))
console.log(Math.floor(0.47 / 0.25))

console.log(Math.round((0.47 - .25) * 100) / 100)