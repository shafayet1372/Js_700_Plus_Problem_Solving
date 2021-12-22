/* Making a Sandwich
Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.

Examples
makeSandwich(["tuna", "ham", "tomato"], "ham") ➞ ["tuna", "bread", "ham", "bread", "tomato"]

makeSandwich(["cheese", "lettuce"], "cheese") ➞ ["bread", "cheese", "bread", "lettuce"]

makeSandwich(["ham", "ham"], "ham") ➞ ["bread", "ham", "bread", "bread", "ham", "bread"]
Notes
You will always get valid inputs.
Make two separate sandwiches if two of the same elements are next to each other (see example #3). */

function makeSandwich(ingredients, flavour) {
  let result = []
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] == flavour) {
      result.push('bread')
      result.push(flavour)
      result.push('bread')
    } else {
      result.push(ingredients[i])
    }
  }
  return result
}

console.log(makeSandwich(["t", "h", "t"], "h"))