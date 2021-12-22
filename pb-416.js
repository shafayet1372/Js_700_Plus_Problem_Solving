/* Fruit Salad 🍇🍓🍎
Fruit salads are served best when the fruits are sliced and diced into small chunks!

For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

Worked Example
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"
Examples
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

fruitSalad(["banana"]) ➞ "anaban"
Notes
If a fruit has an odd number of letters, make the right side larger than the left.
For example: "apple" will be sliced into "ap" and "ple".
All fruits will be given in lowercase. */









function fruitSalad(arr) {
  let chunks = []
  for (let i = 0; i < arr.length; i++) {
    let ar = arr[i].split("")
    let h1 = ar.slice(0, Math.floor(ar.length / 2)).join("")

    let h2 = ar.slice(Math.floor(ar.length / 2), ar.length).join("")
    chunks = [...chunks, h1, h2]
  }

  return chunks.sort((a, b) => {
    let a1 = a.charCodeAt(0)
    let b1 = b.charCodeAt(0)
    if (a1 == b1) {
      let index
      for (let i = 0; i < a.length > b.length ? a.length : b.length; i++) {
        if (a.charCodeAt(i) != b.charCodeAt(i)) {
          index = i
          console.log(i)
          break
        }
      }
      a1 = a.charCodeAt(index)
      b1 = b.charCodeAt(index)
    }

    return a1 - b1
  }).join("")

}

console.log(fruitSalad(["apple", "pear", "grapes"]))