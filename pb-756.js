/* Loves Me, Loves Me Not...
"Loves me, loves me not" is a traditional game in which a person plucks off all the petals of a flower one by one, saying the phrase "Loves me" 
and "Loves me not" when determining whether the one that they love, loves them back.

Given a number of petals, return a string which repeats the phrases "Loves me" and "Loves me not" for every alternating petal, and return the last
 phrase in all caps. Remember to put a comma and space between phrases.

Examples
lovesMe(3) ➞ "Loves me, Loves me not, LOVES ME"

lovesMe(6) ➞ "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"

lovesMe(1) ➞ "LOVES ME"
Notes
Remember to return a string.
The first phrase is always "Loves me". */

function lovesMe(n) {
  let str = "Loves me";
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      result.push(str);
    } else {
      result.push(str + " not");
    }
  }
  result[result.length - 1] = result[result.length - 1].toUpperCase();
  return result.join(", ");
}

console.log(lovesMe(3));
