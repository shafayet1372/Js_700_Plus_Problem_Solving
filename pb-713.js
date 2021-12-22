/* White Spaces Between Lower and Uppercase Letters
Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

Examples
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
Notes
Each word in the phrase will be at least two characters long. */


function insertWhitespace(s) {
    let str = s.split("")
    return str.map((x, i, arr) =>  i != 0 && (arr[i].toUpperCase() == x && arr[i - 1].toLowerCase() == arr[i - 1]) ? ' ' + x : x
     ).join("")
}
console.log(insertWhitespace("SheWalksToTheBeach"))