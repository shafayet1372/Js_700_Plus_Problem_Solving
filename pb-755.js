/* Mexican Wave Simulator
Mexican Wave Simulator

The wave (known as a Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed 
stadium when successive groups of spectators briefly stand, yell, and raise their arms.

Create a function that takes a string and turns it into a Mexican Wave.

Examples
wave("edabit") ➞ ["Edabit", "eDabit", "edAbit", "edaBit", "edabIt", "edabiT"]

wave("just do it") ➞ ["Just do it", "jUst do it", "juSt do it", "jusT do it", "just Do it", "just dO it", "just do It", "just do iT"]

wave(" ") ➞ []
Notes
All test cases will be lowercase strings.
Ignore spaces (they are considered empty seats).
An empty string should return an empty array. */

function wave(str) {
  if (str == " ") {
    return [];
  }
  let l = 0,
    result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      let val = str.split("");
      val[i] = val[i].toUpperCase();
      result.push(val.join(""));
    }
  }
  return result;
}

console.log(wave("just do it"));
