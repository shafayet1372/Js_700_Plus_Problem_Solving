/* Burglary Series (02): Most Valuable Item
You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

Examples
mostExpensiveItem({
  piano: 2000,
}) ➞ "piano"

mostExpensiveItem({
  tv: 30,
  skate: 20,
}) ➞ "tv"

mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
}) ➞ "stereo"
Notes
There will only be one most valuable item (no ties).
The object will always contain at least one item (no empty objects).
 */



function mostExpensiveItem(obj) {
  let groups = []
  for (let v in obj) {
    groups.push({ ['name']: v, ['price']: obj[v] })
  }

  return groups.sort((a, b) => b.price - a.price)[0].name
}

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
}))