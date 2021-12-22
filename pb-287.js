/* Get Students with Names and Notes Average
Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }.
 If student has no notes (an empty array) then let's assume avgNote: 0.

Examples
[
  { name: "John", notes: [3, 5, 4]}
] ➞ [
  { name: "John", avgNote: 4 }
]
Notes
Try doing it with an arrow function.
 */





function getStudentsWithNamesAndAvgNote(students) {
    let results = students.map(val => {
        let result = val.notes.reduce((acc, val) => {
            return acc + val
        }, 0) / val.notes.length
        return { name: val.name, avgNote: result ? result : 0 }
    })
    return results
}
console.log(getStudentsWithNamesAndAvgNote([{ name: "John", notes: [3, 5, 4] }
]))