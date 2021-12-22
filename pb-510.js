/* Partially Hidden String
Create a function that takes a phrase and transforms each word using the following rules:

Keep first and last character the same.
Transform middle characters into a dash -.
Examples
partiallyHide("skies were pretty") ➞ "s---s w--e p----y"

partiallyHide("red is not my color") ➞ "r-d is n-t my c---r"

partiallyHide("She rolled her eyes") ➞ "S-e r----d h-r e--s"

partiallyHide("Harry went to fight the basilisk") ➞ "H---y w--t to f---t t-e b------k"
Notes
Words with two or fewer letters should not be hidden at all. */



function partiallyHide(phrase) {
  let s = phrase.split(" ")
  return s.map(x => {
    let val = x.split("")
    return val.map((y, i) => {
      if (i != 0 && i != val.length - 1) {
        return '-'
      }
      return y
    }).join("")
  }).join(" ")

  // let result = []
  // for (let i = 0; i < s.length; i++) {
  //   let val = s[i].split("")
  //   for (let j = 0; j < val.length; j++) {
  //     if (j != 0 && j != val.length - 1) {
  //       val[j] = '-'
  //     }
  //   }
  //   result.push(val.join("") + ' ')
  // }
  // return result.join("").trim()
}

console.log(partiallyHide("skies were pretty"))