Fruit Juices
A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a flavor's name and its capacity.
/* 
Create a function that creates the product IDs for the variety of fruit juices.

Examples
getDrinkID("apple", "500ml") ➞ "APP500"

getDrinkID("pineapple", "45ml") ➞ "PIN45"

getDrinkID("passion fruit", "750ml") ➞ "PASFRU750"
Notes
Capacity will be given as a string and will always be given in ml.
Return the product ID in UPPERCASE. */

function getDrinkID(flavor, ml) {
  let cap = ml.split("ml")[0]
  let code = []
  let s = flavor.split(" ")
  for (let i = 0; i < s.length; i++) {
    let val = s[i].split("")
    code[i] = val.slice(0, 3).join("").toUpperCase()
  }
  return code.join("") + cap
}

console.log(getDrinkID("passion fruit", "750ml"))