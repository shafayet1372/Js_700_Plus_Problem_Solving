/* Numbered Alphabet
Create a function that converts a string of letters to their respective number in the alphabet.

A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T...
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	1
	20	21	22	...
Examples
alphNum("XYZ") ➞ "23 24 25"

alphNum("ABCDEF") ➞ "0 1 2 3 4 5"

alphNum("JAVASCRIPT") ➞ "9 0 21 0 18 2 17 8 15 19"
Notes
Make sure the numbers are spaced.
All letters will be UPPERCASE. */

function alphNum(str) {
  let result = []
  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    result[i] = str.charCodeAt(i) - 65
  }
  return result.join(" ")
}

console.log(alphNum("XYZ"))