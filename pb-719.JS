/* Sort Names According to the Length of Their Last Names
Create a function that takes an array of names in the format "First Name Last Name" (e.g. "John Doe"), and returns an array of these names sorted
 by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.

Examples
lastNameLensort([
  "Jennifer Figueroa",
  "Heather Mcgee",
  "Amanda Schwartz",
  "Nicole Yoder",
  "Melissa Hoffman"
]) ➞ ["Heather Mcgee", "Nicole Yoder", "Melissa Hoffman", "Jennifer Figueroa", "Amanda Schwartz"]
Notes
If last names are of the same length, sort alphabetically by last name. */

function lastNameLensort(names) {
  return names.sort((a, b) => {
    a = a.split(" ")[1]
    b = b.split(" ")[1]
    let a1 = a.length
    let b1 = b.length
    if (a1 == b1) {
      a1 = a.charCodeAt(0)
      b1 = b.charCodeAt(0)
    }
    return a1 - b1
  })
}

console.log(lastNameLensort([
  "Jennifer Figueroa",
  "Heather Mcgee",
  "Amanda Schwartz",
  "Nicole Yoder",
  "Melissa Hoffman"
]))