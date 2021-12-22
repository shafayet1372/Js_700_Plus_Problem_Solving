/* String Match by Two Letters
Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two 
letters must appear at consecutive indices.

For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

Examples
strMatchBy2char("yytaazz", "yyjaaz") ➞ 3

strMatchBy2char("edabit", "ed") ➞ 1

strMatchBy2char("", "") ➞ 0
Notes
Don't forget to return the result. */




function strMatchBy2char(a, b) {
  let s1 = a.split('')
  let s2 = b.split('')
  let counter = 0
  for (let i = 0; i < s1.length; i++) {

    if (s1[i] == s2[i] && s1[i + 1] == s2[i + 1]  && s1[i+1]!=undefined) {
      console.log(s1[i],s2[i])
      counter++
    }
  }
  return counter
}

console.log(strMatchBy2char('ABc', 'Ajc'))