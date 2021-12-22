/* RNA Reverse Complement
Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string
 containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:

Original	Complement
"AAA"	"UUU"
"UUU"	"AAA"
"GGG"	"CCC"
"CCC"	"GGG"
Your function should find the complement on the right AND also reverse the resulting string.

Examples
reverseComplement("GUGU") ➞ "ACAC"

reverseComplement("UCUCG") ➞ "CGAGA"

reverseComplement("CAGGU") ➞ "ACCUG"
Notes
You can assume all input seqeuences will be valid.
 */


function reverseComplement(inputSequence) {
  let rna = {
    "A": "U", "U": "A", "G": "C", "C": "G"
  }
  let s = inputSequence.split('')
  return s.reduce((acc, val) => {
    return acc = acc + rna[val]
  }, "").split("").reverse().join("")
}

console.log(reverseComplement("GUGU"))