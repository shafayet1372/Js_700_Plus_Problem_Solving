/* Removing Enemies
Remove enemies from the array of people, even if the enemy shows up twice.

Examples
removeEnemies(["Fred"], []) ➞ ["Fred"]

removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]

removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]
Notes
All names to be removed will be in the enemies array; simply return the array, no fancy strings. */

function removeEnemies(names, enemies) {

  /* 
  shortway
  return names.filter(x => {
     let v = enemies.some(y => x == y)
 
     return v?false:true
   }) */
  let result = []
  for (let i = 0; i < names.length; i++) {
    if (!(enemies.indexOf(names[i]) >= 0)) {
      result.push(names[i])
    }
  }
  return result

}
console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]))
