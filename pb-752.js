/* Find the Shortest Word(s) in a Sentence
Create a function that accepts a string as an argument. Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).

Examples
findShortestWords("I think the solution is fairly obvious.") ➞ ["i"]

findShortestWords("Chase two rabbits, catch none.") ➞ ["two"]

findShortestWords("We become what we think about.") ➞ ["we", "we"]

findShortestWords("The quick brown fox jumped over the lazy dogs back.") ➞ ["fox", "the", "the"]
Notes
Periods, commas and other special characters don't count as part of a word's length.
Remember to sort the array of words alphabetically before returning your result.
Return words in lowercase only. */

function findShortestWords(str) {
    let s = str.toLowerCase().replace(/[\.\?,!]/, '').split(" ")
    let shortNum = s.sort((a, b) => a.length - b.length)[0].length
    return s.filter(x => x.length == shortNum && isNaN(x)).sort((a, b) => {

        let a1 = a.charCodeAt(0)
        let b1 = b.charCodeAt(0)
        if (a1 == b1) {
            let index = null
            for (let i = 0; i < a.length > b.length ? a.length : b.length; i++) {
                if (a.charCodeAt(i) != b.charCodeAt(i)) {
                    index = i
                    break;
                }
            }
            a1 = a.charCodeAt(index)
            b1 = b.charCodeAt(index)
        }
        return a1 - b1
    }
    )
}

console.log(findShortestWords("Strive not to be a success, but rather to be of value"))