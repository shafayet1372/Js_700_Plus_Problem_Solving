/* Superheroes
Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man".
 Return the names in alphabetical order.

Examples
superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])
➞ ["Batman", "Spider-man", "Superman"]

superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"])
➞ ["Aquaman"]

superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])
➞ []
Notes
Wonder-Woman, Catwoman and Invisible-Woman are superheroines.
 */





function superheroes(heroes) {
  let result = heroes.filter(val => (/[^o]man/g).test(val))

  return result.sort((a, b) => {
    let a1 = a.charCodeAt(0)
    let b1 = b.charCodeAt(0)
    if (a1 == b1) {
      let index
      for (let i = 0; i < a.length > b.length ? a.length : b.length; i++) {
        if (a[i] != b[i]) {
          index = i
          break;
        }
      }
      a1 = a.charCodeAt(index)
      b1 = b.charCodeAt(index)
    }
    return a1 - b1
  })
}
console.log(superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"]))