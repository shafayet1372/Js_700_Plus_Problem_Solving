/* Clear the Fog
Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".

Examples
clearFog("sky") ➞ "It's a clear day!"

clearFog("fogfogFFfoooofftogffreogffesGgfOogfog") ➞ "trees"

clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog") ➞ "birdsandthebees"
Notes
Hidden words won't include the letters f, o or g.
Hidden words are always in lowercase.
 */


function clearFog(str) {
  if (!/[fog]/i.test(str)) {
    return "It's a clear day!"
  }
  return str.replace(/[fog]/gi, '')
}

console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"))