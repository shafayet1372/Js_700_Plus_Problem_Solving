/* Syncopated Rhythm
Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).

You will be given a string representing beats, where hashtags # represent emphasized beats. Create a function that returns true if the line of music 
contains any syncopation, and false otherwise.

Examples
hasSyncopation(".#.#.#.#") ➞ true
// There are Hash signs in the second, fourth, sixth and
// eighth positions of the string.

hasSyncopation("#.#...#.") ➞ false
// There are no Hash signs in the second, fourth, sixth or
// eighth positions of the string.

hasSyncopation("#.#.###.") ➞ true
// There are Hash signs in the sixth positions of the string.
Notes
All other unemphasized beats will be represented as a dot */


function hasSyncopation(s) {
  let str = s.split("")
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 1 && str[i] == '#') {
      return true
    }
  }
  return false
}

console.log(hasSyncopation(".#.#.#.#"))