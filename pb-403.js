/* Capitalize the Names
Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

Examples
capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
Notes
Don't change the order of the original array.
Notice in the second example above, "MABELLE" is returned as "Mabelle". */





function capMe(arr) {
  return arr.map(val => {
    val = val.split("")

    val[0] = val[0].toLowerCase() == val[0] ? val[0].toUpperCase() : val[0]

    let remain = val.slice(1, val.length).join("").toLowerCase()
    return val[0] + remain

  })
}

console.log(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']))