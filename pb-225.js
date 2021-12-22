/* An anagram is a word, x, formed by rearranging the letters that make up another word, y, and using up all the letters in y at the same frequency. 
For example, "dear" is an anagram of "read" and "plead" is an anagram of "paled".

The Hamming distance between two strings is the number of positions at which they differ. Hamming distances can only be calculated for strings of equal
 length.

let s1 = "eleven"

let s2 = "twelve"
They only have the third position (index 2) in common, giving them a Hamming distance of 5.

As anagrams are of identical length, the Hamming distance between them can be calculated.

let s1 = "read"

let s2 = "dear"
These strings differ at the first and last positions, giving them a Hamming distance of 2. "Plead" and "paled" have a Hamming distance of 3.

Create a function that takes two strings, and returns:

true if they are anagrams of each other and their Hamming distance is equal to their length (i.e. no letters in the same positions).
false if they aren't anagrams, or
Their Hamming distance if they are anagrams with >=1 letter at the same index.
Examples
maxHam("dear", "read") ➞ 2

maxHam("dare", "read") ➞ true

maxHam("solemn", "molest") ➞ false
Notes
N/A */



function maxHam(s1, s2) {
    let dif = 0, counter = 0, cmpStr1 = s1.split(""), cmpStr2 = s2.split("")
    for (let i = 0; i < s1.length; i++) {
        if (cmpStr1[i] != cmpStr2[i]) {
            dif++
        }
        if (cmpStr2.indexOf(cmpStr1[i]) >= 0) {
            counter++
        }
    }
    if ((counter == s1.length && counter == s2.length) && dif == s1.length) {
        return true
    } else if ((counter == s1.length && counter == s2.length) && dif >= 1) {
        return dif
    }
    return false
}

console.log(maxHam('naive', 'ravine'))